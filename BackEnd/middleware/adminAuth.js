// middleware/adminAuth.js

import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ success: false, message: "Authorization token required" });
        }

        // 🛡️ Extract token from "Bearer tokenString"
        const token = authorization.startsWith("Bearer ")
            ? authorization.split(" ")[1]
            : authorization;


        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Tken admin",decodedToken);
       

        if (
            // decodedToken !=="valentino@gmail.comVALENTINO9826"
            decodedToken.email !== process.env.ADMIN_EMAIL ||
            decodedToken.password !== process.env.ADMIN_PASSWORD
        ) {
            return res.status(403).json({ success: false, message: "Unauthorized access" });
        }

        next(); // User is authenticated
    } catch (error) {
        console.error("Admin Auth Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};

export default adminAuth;
