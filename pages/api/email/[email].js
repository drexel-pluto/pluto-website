export default (req, res) => {
    const email = req.query.email;
    console.log('Email received. POST to API here.');
    res.status(200).json({ email });
}