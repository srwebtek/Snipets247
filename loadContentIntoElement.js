function loadContentIntoElement(dataId, dataPath) {
  const importedElement = document.getElementById(dataId);

  if (!importedElement) {
    console.error(`
Element with id="${dataId}" not found.
SOLUTION AS FOLLOWS:
1. The id doesn't exist
2. The id doesn't match "data-id=XXXX"`);
    return;
  }

  fetch(dataPath)
    .then((res) => {
      if (res.status === 200) {
        return res.text();
      } else {
        throw new Error(`
Fetch request is being used to import HTML from a separate file.
Element with path = ${dataPath} not found.
SOLUTION AS FOLLOWS:
1. The file doesn't exist.
2. The file name is incorrect.
3. The file path is incorrect.`);
      }
    })
    .then((data) => {
      importedElement.innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
      importedElement.innerHTML = "<h1>Page Not Found</h1>";
    });
}
