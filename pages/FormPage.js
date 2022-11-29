import { useRouter } from "next/router";
import AddAd from "../components/AddAd";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

export default function FormPage({ isUser }) {
  const router = useRouter();
  const currentDate = new Date();

  const id = isUser.id;

  const { data: user } = useSWR(`/api/users/${id}`, fetcher);

  async function sendAd(ad) {
    const newAd = {
      ...ad,
      userId: id,
      userName: user.userName,
      userPictureSrc: user.userPictureSrc,
      userEmail: user.userEmail,
      userPhonenumber: user.userPhonenumber,
      tags: ad.tags.split(","),
      createdDate: currentDate,
    };

    const response = await fetch("/api/listing/", {
      method: "POST",
      body: JSON.stringify(newAd),
    });

    router.back();
  }

  return (
    <>
      {isUser.loggedIn ? (
        <>
          <h1>Be a Hero for the community</h1>
          <AddAd onSubmit={sendAd} onGoBack={() => router.back()} />
        </>
      ) : (
        <h1>Sorry, you have to log in before creating a new ad.</h1>
      )}
    </>
  );
}
