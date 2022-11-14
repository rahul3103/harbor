const fetcher = (url) =>
  fetch(url)
    .then((r) => {
      console.log({ r });
      if (!r.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      return r.json();
    })
    .catch((e) => e);

export default fetcher;
