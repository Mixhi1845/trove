"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PomodoroTimerProps {
  workDuration?: number;
  breakDuration?: number;
  presets?: { work: number; break: number }[];

  mode1: string;
  mode2: string;
  preseth: string;
  controlh: string;
  start: string;
  stop: string;
  control1: string;
  control2: string;
  control3: string;
  cycleh: string;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  workDuration = 25,
  breakDuration = 5,
  presets = [
    { work: 25, break: 5 },
    { work: 45, break: 15 },
    { work: 60, break: 20 },
  ],
  mode1,
  mode2,
  preseth,
  controlh,
  start,
  stop,
  control1,
  control2,
  control3,
  cycleh,
}) => {
  const [mode, setMode] = useState<"work" | "break">("work");
  const [duration, setDuration] = useState(workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [totalWorkTime, setTotalWorkTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const resetTimer = () => {
    setDuration(mode === "work" ? workDuration * 60 : breakDuration * 60);
    setIsRunning(false);
    setIsPaused(true);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const switchMode = () => {
    setMode(mode === "work" ? "break" : "work");
    setDuration(mode === "work" ? breakDuration * 60 : workDuration * 60);
  };

  const handlePreset = (preset: { work: number; break: number }) => {
    setDuration(preset.work * 60);
    setMode("work");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && !isPaused) {
        setDuration(duration - 1);
        if (duration === 0) {
          if (mode === "work") {
            setCompletedPomodoros((prevCount) => prevCount + 1);
            setTotalWorkTime((prevTime) => prevTime + workDuration * 60);
          }
          audioRef.current?.play();
          switchMode();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    isRunning,
    isPaused,
    duration,
    mode,
    workDuration,
    breakDuration,
    audioRef,
    switchMode,
  ]);
  return (
    <section id="tool">
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />
      <div className="grid gap-4">
        <Card>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-32 lg:h-64">
              <div className="text-6xl lg:text-9xl font-bold">
                {`${String(minutes).padStart(2, "0")}:${String(
                  seconds
                ).padStart(2, "0")}`}
              </div>
              <p className="text-muted-foreground">
                {mode === "work" ? mode1 : mode2}
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{preseth}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {presets.map((preset, index) => (
                  <Button
                    key={index}
                    className="bg-muted text-foreground hover:bg-muted/80"
                    onClick={() => handlePreset(preset)}
                  >
                    {`${preset.work} / ${preset.break}`}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{controlh}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Button
                  className={`text-foreground hover:bg-destructive/80 ${
                    isRunning ? "bg-destructive " : "bg-muted"
                  }`}
                  onClick={isRunning ? stopTimer : startTimer}
                  disabled={isRunning && isPaused}
                >
                  {isRunning ? stop : start}
                </Button>
                <Button
                  className={`text-foreground hover:bg-muted/80 ${
                    isPaused ? "bg-green-500" : "bg-muted"
                  }`}
                  onClick={togglePause}
                  disabled={!isRunning}
                >
                  {isPaused ? control1 : control2}
                </Button>
                <Button
                  className="text-foreground hover:bg-blue-500/80 bg-blue-500"
                  onClick={resetTimer}
                >
                  {control3}
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{cycleh}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-3xl">{completedPomodoros}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PomodoroTimer;
