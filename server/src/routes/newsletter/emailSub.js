import firebase from 'firebase';

const database = firebase.database();

const emailSub = (async (req, res) => {
    await new Promise(r => setTimeout(r, 1000))
    const emailDB = database.ref(`newsletter/emails`);
	await emailDB.get().then(snapshot => {
		const emails = Object.values(snapshot.val() || []);
        if (emails.includes(req.body.email))
            res.status(409)
        else
            emailDB.child(emails.length).set(req.body.email)
	});
    res.json({
        success: res.statusCode == 200
    })
})

export default emailSub;