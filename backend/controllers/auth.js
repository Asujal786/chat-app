import User from "../model/user";

export const loginUser = (req, res) => {
    // Your login logic here
}

export const signUp = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender, email } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const profilePic = (gender === "male") ? "https://avatar.iran.liara.run/public/boy" : "https://avatar.iran.liara.run/public/girl";

        const newUser = new User({
            fullName,
            userName,
            password,
            email,
            gender,
            profilePic
        });

        await newUser.save();

        res.status(201).json({ newUser });
    } catch (err) {
        res.json({ message: err });
    }
}

export const signOut = (req, res) => {
    // Your sign out logic here
}
