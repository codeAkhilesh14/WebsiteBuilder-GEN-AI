const extractJson = async (text) => {
    if(!text) {
        return;
    }
    const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();

    // removing first bracket
    const firstBrace = cleaned.indexOf('{')
    
    // removing second bracket
    const closeBrace = cleaned.lastIndexOf('}')

    if(firstBrace === -1 || closeBrace === -1) return null

    const jsonString = cleaned.slice(firstBrace, closeBrace + 1)
    return JSON.parse(jsonString)
}

export default extractJson