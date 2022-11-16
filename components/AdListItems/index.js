import { data } from "../utils/data";
import Image from "next/image";
import styled from "styled-components";

export default function AdListItems() {
  return (
    <>
      {data.map((ad) => {
        return (
          <StyledArticle key={ad.id}>
            <Image
              src={
                ad.adPictureSrc == ""
                  ? `https://source.unsplash.com/random/?${ad.category}`
                  : ad.adPictureSrc
              }
              width={400}
              height={400}
              alt={`Examplephoto of ${ad.adTitle}`}
            ></Image>
            <h2>{ad.adTitle}</h2>
            <Image
              src={
                ad.adPictureSrc == ""
                  ? `https://source.unsplash.com/random/?${ad.userName}`
                  : ad.userPictureSrc
              }
              width={50}
              height={50}
              alt={`Profilphoto of ${ad.userName}`}
            ></Image>
            <p>{ad.userName}</p>
            <p>Costs: {ad.adCosts} Karmapoints</p>
            <p>created at {ad.createdDate}</p>
          </StyledArticle>
        );
      })}
    </>
  );
}

const StyledArticle = styled.article`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;
