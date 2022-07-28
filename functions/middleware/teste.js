const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

/**
 * asdsfas
 */
async function teste()
{
    initializeApp();

    const db = getFirestore();
    const snapshot = await db.collection("aluno").get();

    snapshot.forEach(doc => {
        console.log(doc.data());
    });
}

module.exports = teste;