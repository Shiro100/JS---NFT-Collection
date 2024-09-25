/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs' metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// create a variable to hold your NFTs
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_brand, _model, _color, _horsePower) {
    const NFT = {
        "brand": _brand, 
        "model": _model,
        "color": _color,
        "horsePower": _horsePower
    };
    NFTs.push(NFT);
    console.log(`Minted Car NFT: ${_brand} ${_model}`);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    console.log("\nList of all Car NFTs:");
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Brand: \t\t" + NFTs[i].brand);
        console.log("Model: \t\t" + NFTs[i].model);
        console.log("Color: \t\t" + NFTs[i].color);
        console.log("Horsepower: \t" + NFTs[i].horsePower);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalCarSupply() {
    console.log("\nTotal Car NFTs Minted: " + NFTs.length);
}

// call your functions below this line
mintNFT("Tesla", "Model S", "Red", 670);
mintNFT("Ford", "Mustang", "Blue", 450);
mintNFT("Lamborghini", "Huracan", "Yellow", 631);
mintNFT("Ferrari", "488 Spider", "Black", 661);

listNFTs();
getTotalCarSupply();
