const importedElement = document.getElementById("importText");

const id = importedElement.getAttribute("data-id");
const path = importedElement.getAttribute("data-path");

fetch(path)
  .then((res) => {
    if (res.status === 200) {
      return res.text();
    } else {
      throw new Error("\nFetch request is being used to import HTML from separate file.\nid = "+id+"\npath = "+path+"\nSOLUTION AS FOLLOWS:\n1 HTML 'data-id=xxxxx' missing or incorrect\n2 HTML 'data-path=xxxxx' missing or incorrect\n3 The file doesn't exist.\n4 The file name is incorrect\n5 The file path is incorrect.");
    }
  })
  .then((data) => {
    importedElement.innerHTML = data;
  })
  .catch((error) => {
    console.error(error);
    importedElement.innerHTML = "<h1>Page Not Found</h1>";
  });

 
