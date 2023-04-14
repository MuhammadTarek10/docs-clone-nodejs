import jwt from "jsonwebtoken";
export async function auth(req, res, next) {
  try {
    const token = req.header("x-auth-token");

    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied" });

    const decoded = jwt.verify(token, "docs");

    if (!decoded) return res.status(401).json({ msg: "Token is not valid" });

    req.userId = decoded.id;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}
