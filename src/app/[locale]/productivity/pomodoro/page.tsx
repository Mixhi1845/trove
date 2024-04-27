import PageLayout from "@/components/page-layout";
import PomodoroTimer from "@/components/tool-components/pomodoro";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <PageLayout title="Pomodoro Timer">
      <PomodoroTimer />
      <Card className="mt-16 lg:max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>
            Why should I use a Pomodoro Timer to Boost my Productivity ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-5">
            The Pomodoro Technique is a time management method that can
            significantly improve your productivity and focus. By dividing your
            work into short, focused intervals followed by short breaks, the
            Pomodoro Technique helps you maintain a consistent level of
            concentration and minimize distractions.
          </p>
          <p className="mt-5">
            Here are the top reasons why you should consider using a Pomodoro
            Timer:
          </p>
          <ol className="list-disc list-outside ml-6">
            <li>
              <strong>Increased Focus and Concentration</strong>: The Pomodoro
              Technique encourages you to work in focused, uninterrupted
              25-minute intervals, which can help you avoid the temptation to
              multitask or get sidetracked by email, social media, or other
              distractions.
            </li>
            <li>
              <strong>Improved Time Management</strong>: By breaking down your
              work into smaller, more manageable tasks, the Pomodoro Technique
              can help you better understand how you spend your time and
              identify areas for improvement.
            </li>
            <li>
              <strong>Reduced Burnout</strong>: The regular breaks built into
              the Pomodoro Technique can help prevent mental fatigue and
              burnout, allowing you to maintain a consistent level of
              productivity throughout the day.
            </li>
            <li>
              <strong>Enhanced Work-Life Balance</strong>: The Pomodoro
              Technique can help you better separate your work and personal life
              by encouraging you to take regular breaks and step away from your
              work during those intervals.
            </li>
            <li>
              <strong>Increased Motivation and Productivity</strong>: The sense
              of accomplishment you&apos;ll feel after completing each Pomodoro
              can help you stay motivated and focused on your tasks, leading to
              greater overall productivity.
            </li>
          </ol>
          <p className="mt-5">
            To get started with the Pomodoro Technique, all you need is a timer
            (either a physical one or a digital Pomodoro app) and a willingness
            to commit to the process. Give it a try and experience the
            transformative power of this time-tested productivity method.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
