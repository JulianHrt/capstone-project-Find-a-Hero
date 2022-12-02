async function updateKarmaAmountForLoggedInUser(id, requestKarma) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();

  const updatedCurrentUser = {
    ...user,
    karmaAccount: Number(user.karmaAccount) - Number(requestKarma),
  };

  await fetch(`/api/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedCurrentUser),
  });
}

async function updateKarmaAmountForHero(id, requestKarma) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();

  const updatedCurrentUser = {
    ...user,
    karmaAccount: Number(user.karmaAccount) + Number(requestKarma),
  };

  await fetch(`/api/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedCurrentUser),
  });
}

export { updateKarmaAmountForLoggedInUser, updateKarmaAmountForHero };
