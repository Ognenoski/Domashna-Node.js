const getAnalysis = (req, res) => {
    res.render("get-forma");
};

const postAnalysis = (req, res) => {
    res.render("post-forma");

    const text = req.body.text;

    const totalCharacters = text.length; // Vkupen broj na karakteri

    const words = text.split(" "); // Se deli tekstot na zborovi i se kreira niza od zborovi

    const wordsLessThanFive = words.filter(word => word.length < 5).length; // Zborovi so pomalku od 5 karakteri

    const wordsMoreThanFive = words.filter(word => word.length > 5).length; //Zborovi so povekje od 5 karakteri

    const wordsEqualToFive = words.filter(word => word.length === 5).length; // Zborovi so tocno 5 karakteri

    const totalParagraphs = text.split("\n\n").length; // Vkupen broj na paragrafi

    const totalWords = words.length; // Vkupen broj na zborovi


    res.render("post-forma", {
        text,
        totalCharacters,
        totalWords,
        wordsLessThanFive,
        wordsMoreThanFive,
        wordsEqualToFive,
        totalParagraphs,
    });
};

module.exports = {
    getAnalysis,
    postAnalysis
};