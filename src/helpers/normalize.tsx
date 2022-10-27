export function Normalize(toNormalize: string) {
    const wordIndex = toNormalize.replaceAll("-"," ").split(" ") 
        for(var i =0; i < wordIndex.length; i++) {
            wordIndex[i] = wordIndex[i].charAt(0).toUpperCase() + wordIndex[i].slice(1)
        }
     

        return wordIndex.join(" ")
}