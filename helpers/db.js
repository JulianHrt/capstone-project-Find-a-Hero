import ads from "../db.json";

function getAllAds() {
  return ads;
}

function getAdById(id) {
  console.log(id);
  return ads.find((ad) => {
    return ad.id === id;
  });
}

export { getAllAds, getAdById };
