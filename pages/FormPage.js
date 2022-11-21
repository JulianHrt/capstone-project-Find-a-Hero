import AddAd from "../components/AddAd";

import styled from "styled-components";
import Router from "next/router";

export default function FormPage() {
  const currentDate = new Date();

  async function sendAd(ad) {
    const newAd = {
      ...ad,
      tags: ad.tags.split(","),
      createdDate: currentDate,
    };

    const response = await fetch("/api/ads/", {
      method: "POST",
      body: JSON.stringify(newAd),
    });

    Router.push("/AdListPage");
  }

  return (
    <MainFlexWrapper>
      <h1>Be a Hero for the community</h1>
      <AddAd onSubmit={sendAd} />
    </MainFlexWrapper>
  );
}

const MainFlexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
