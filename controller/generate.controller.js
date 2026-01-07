const ai = require("../config/gemini.config");
const generateModel = require("../model/generate.model");

const generateContent = async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Please provide code",
            });
        }

        const saved = await generateModel.create({
            code,
            result: "",
        });

        const prompt = `
        Review the following code:

        ${code}

        Return the response in this format:
        1. Issues
        2. Fixed Code
        3. Improvements
        4. Simple Explanation

        Do not mention your role, experience, or identity.
       `;

        // ✅ CORRECT GoogleGenAI USAGE
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }],
                },
            ],
        });

        const text = response.text;

        saved.result = text;
        await saved.save();

        res.status(200).json({
            success: true,
            data: saved,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { generateContent };
