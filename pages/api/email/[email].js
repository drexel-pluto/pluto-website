import globals from '../../../globals'
import fetch from 'isomorphic-unfetch';
const apiUrl = globals.api;

export default (req, res) => {
    ( async () => {
        try {
            const data = { email: req.query.email }
            const payload = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
            const response = await fetch(`${apiUrl}/api/public/email/save`, payload);
            const emailSave = await response.json();
            res.status(200).json({ email: emailSave });
        } catch (err) {
            res.status(500).json({ err });
        }
    })();
}
