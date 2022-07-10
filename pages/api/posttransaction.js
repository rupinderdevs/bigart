export default function handler (req, res) {
  let status = req.body.STATUS

  res.redirect(307, `/confirm?success=${status}`)
}
