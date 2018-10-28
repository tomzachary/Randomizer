export function LoadItemsConfig(fileName) {
    let fileReader;

    const handleConfigRead = (event) => {
        const content = fileReader.reader;
        console.log(content);
    };

    fileReader = new FileReader();
    fileReader.onloadend = handleConfigRead;
    fileReader.readAsText(fileName + '.json');

    return handleLoadingConfig("items");
}

