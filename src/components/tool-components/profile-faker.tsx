"use client";
import {
  fakerEN,
  fakerDE,
  fakerES,
  fakerEN_GB,
  fakerUK,
} from "@faker-js/faker";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { fontMono } from "@/lib/fonts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  FaUser,
  FaPhone,
  FaAddressBook,
  FaImage,
  FaClipboard,
  FaAt,
} from "react-icons/fa6";
import copy from "copy-to-clipboard";
import { Button } from "@/components/ui/button";
import RandomNumber from "@/lib/random-number";

const ProfileFaker = () => {
  const [fullName, setFullName] = useState(fakerEN.person.fullName());
  const [userName, setUserName] = useState(fakerEN.internet.userName());
  const [bio, setBio] = useState(fakerEN.person.bio());
  const [phoneNumber, setPhoneNumber] = useState(fakerEN.phone.number());
  const [streetAddress, setStreetAddress] = useState(
    fakerEN.location.streetAddress()
  );
  const [city, setCity] = useState(fakerEN.location.city());
  const [state, setState] = useState(fakerEN.location.state());
  const [country, setCountry] = useState("USA");
  const [imageUrl, setImageUrl] = useState(fakerEN.image.url());
  const [avatarUrl, setAvatarUrl] = useState(fakerEN.image.avatar());

  const handleCopyToClipboard = (text: string) => {
    copy(text);
  };

  const handleLanguageSwitch = (locale: string) => {
    switch (locale) {
      case "en":
        setFullName(fakerEN.person.fullName());
        setUserName(fakerEN.internet.userName());
        setBio(fakerEN.person.bio());
        setPhoneNumber(fakerEN.phone.number());
        setStreetAddress(fakerEN.location.streetAddress());
        setCity(fakerEN.location.city());
        setState(fakerEN.location.state());
        setCountry("USA");
        setImageUrl(fakerEN.image.url());
        setAvatarUrl(fakerEN.image.avatar());
        break;
      case "de":
        setFullName(fakerDE.person.fullName());
        setUserName(fakerDE.internet.userName());
        setBio(fakerDE.person.bio());
        setPhoneNumber(fakerDE.phone.number());
        setStreetAddress(fakerDE.location.streetAddress());
        setCity(fakerDE.location.city());
        setState(fakerDE.location.state());
        setCountry("Germany");
        setImageUrl(fakerDE.image.url());
        setAvatarUrl(fakerDE.image.avatar());
        break;
      case "es":
        setFullName(fakerES.person.fullName());
        setUserName(fakerES.internet.userName());
        setBio(fakerES.person.bio());
        setPhoneNumber(fakerES.phone.number());
        setStreetAddress(fakerES.location.streetAddress());
        setCity(fakerES.location.city());
        setState(fakerES.location.state());
        setCountry("Spain");
        setImageUrl(fakerES.image.url());
        setAvatarUrl(fakerES.image.avatar());
        break;
      case "gb":
        setFullName(fakerEN_GB.person.fullName());
        setUserName(fakerEN_GB.internet.userName());
        setBio(fakerEN_GB.person.bio());
        setPhoneNumber(fakerEN_GB.phone.number());
        setStreetAddress(fakerEN_GB.location.streetAddress());
        setCity(fakerEN_GB.location.city());
        setState(fakerEN_GB.location.state());
        setCountry("Great Britain");
        setImageUrl(fakerEN_GB.image.url());
        setAvatarUrl(fakerEN_GB.image.avatar());
        break;
      case "uk":
        setFullName(fakerUK.person.fullName());
        setUserName(fakerUK.internet.userName());
        setBio(fakerUK.person.bio());
        setPhoneNumber(fakerUK.phone.number());
        setStreetAddress(fakerUK.location.streetAddress());
        setCity(fakerUK.location.city());
        setState(fakerUK.location.state());
        setCountry("Ukraine");
        setImageUrl(fakerUK.image.url());
        setAvatarUrl(fakerUK.image.avatar());
        break;
    }
  };

  return (
    <div
      id="tool"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-rows-2"
    >
      <Card className="row-span-2">
        <CardContent className="pt-6 grid  gap-4">
          <div className="bg-background rounded-lg border p-4">
            <div className="flex items-center">
              <img
                src={avatarUrl}
                alt={`Avatar image of ${avatarUrl}`}
                className="w-16 h-16 rounded-full bg-muted mr-4"
              />
              <div>
                <h2 className="font-bold text-lg">{userName}</h2>
                <div className="flex space-x-4">
                  <p>
                    <span className="font-bold">
                      <RandomNumber minValue={10} maxValue={50} />
                    </span>{" "}
                    posts
                  </p>
                  <p>
                    <span className="font-bold">
                      <RandomNumber minValue={100} maxValue={250} />
                    </span>{" "}
                    followers
                  </p>
                  <p>
                    <span className="font-bold">
                      <RandomNumber minValue={50} maxValue={200} />
                    </span>{" "}
                    following
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold">{fullName}</p>
              <p>{bio}</p>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 text-base rounded-lg font-bold"
              >
                Edit Profile
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow">
            <div className="relative">
              <img
                src={imageUrl}
                alt={`Background image for ${imageUrl}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex items-center space-x-4">
                  <img
                    src={avatarUrl}
                    alt={`Avatar image of ${avatarUrl}`}
                    className="w-20 h-20 rounded-full border-4 border-gray-800"
                  />
                  <div className="flex-1">
                    <h2 className="text-white font-bold text-lg">{fullName}</h2>
                    <p className="text-gray-300 text-sm">@{userName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-4">
              <p className="text-gray-300">{bio}</p>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    {city}, {country}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Joined April{" "}
                    <RandomNumber maxValue={2024} minValue={2005} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data</CardTitle>
          <CardDescription>Copy to Clipboard</CardDescription>
        </CardHeader>
        <CardContent className={cn("font-mono", fontMono.variable)}>
          <p className="flex items-center pb-2">
            <FaUser className="text-muted-foreground" />{" "}
            <Button
              className="size-8 ml-4 mr-2"
              variant="outline"
              size="icon"
              onClick={() => handleCopyToClipboard(fullName)}
            >
              <FaClipboard className="text-muted-foreground transition hover:text-foreground" />
            </Button>
            {fullName}
          </p>
          <p className="flex items-center pb-2">
            <FaAt className="text-muted-foreground" />{" "}
            <Button
              className="size-8 ml-4 mr-2"
              variant="outline"
              size="icon"
              onClick={() => handleCopyToClipboard(userName)}
            >
              <FaClipboard className="text-muted-foreground transition hover:text-foreground" />
            </Button>
            {userName}
          </p>
          <p className="flex items-center pb-2">
            <FaPhone className="text-muted-foreground" />{" "}
            <Button
              className="size-8 ml-4 mr-2"
              variant="outline"
              size="icon"
              onClick={() => handleCopyToClipboard(phoneNumber)}
            >
              <FaClipboard className="text-muted-foreground transition hover:text-foreground" />
            </Button>
            {phoneNumber}
          </p>
          <p className="flex items-center pb-2">
            <FaAddressBook className="text-muted-foreground" />{" "}
            <Button
              className="size-8 ml-4 mr-2"
              variant="outline"
              size="icon"
              onClick={() =>
                handleCopyToClipboard(`${streetAddress}, ${city}, ${state}`)
              }
            >
              <FaClipboard className="text-muted-foreground transition hover:text-foreground" />
            </Button>
            {streetAddress}, {city}, {state}
          </p>

          <Button
            variant="outline"
            className="px-2 py-1 h-8 mb-2 mr-2"
            onClick={() => handleCopyToClipboard(avatarUrl)}
          >
            <FaImage className="text-muted-foreground mr-4"></FaImage> Copy
            Avatar URL
          </Button>
          <Button
            variant="outline"
            className="px-2 py-1 h-8 my-2 mx-2"
            onClick={() => handleCopyToClipboard(imageUrl)}
          >
            <FaImage className="text-muted-foreground mr-4"></FaImage> Copy
            Image URL
          </Button>
          <Button
            variant="outline"
            className="px-2 py-1 h-8 ml-2"
            onClick={() => handleCopyToClipboard(bio)}
          >
            <FaImage className="text-muted-foreground mr-4"></FaImage> Copy
            Profile Bio
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Origin Country</CardTitle>
          <CardDescription>
            Click on button to get a profile with other origin counrty
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Button
              variant="outline"
              onClick={() => handleLanguageSwitch("en")}
            >
              EN
            </Button>
            <Button
              variant="outline"
              onClick={() => handleLanguageSwitch("de")}
            >
              DE
            </Button>
            <Button
              variant="outline"
              onClick={() => handleLanguageSwitch("es")}
            >
              ES
            </Button>
            <Button
              variant="outline"
              onClick={() => handleLanguageSwitch("gb")}
            >
              GB
            </Button>
            <Button
              variant="outline"
              onClick={() => handleLanguageSwitch("uk")}
            >
              UK
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileFaker;
