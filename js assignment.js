const NFTs=[];

function minNFT(car,model,seats,airbags){
    const NFT={
        "Car": car,
        "Model" : model,
        "Seats" : seats,
        "Airbags" : airbags
    }
    NFTs.push(NFT);
}
minNFT("Dezire","24","5","2");
minNFT("Punch","20","5","4");
minNFT("Fortuner","22","7","6");
minNFT("Thar","21","5","4");


function listNFTs(){
    for(let i=0;i<NFTs.length;i++){
        console.log("\nID:"+(i+1));
        console.log("Car:" +NFTs[i].Car);
        console.log("Model:" +NFTs[i].Model);
        console.log("Seats:" +NFTs[i].Seats);
        console.log("Airbags:"+ NFTs[i].Airbags);
    }
}
listNFTs();


function getTotalSupply(){
    console.log("\n"+NFTs.length);
}
getTotalSupply();
