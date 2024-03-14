import admin from "firebase-admin";

// Import serviceAccountKey file
import serviceAccount from "@/pchat-2442c-firebase-adminsdk-rfbd2-e39586eda9.json";

// Check if Firebase app has been initialized before initializing
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_BUCKET,
  });
}

const bucket = admin.storage().bucket();

// Define the function to upload image
export default async function uploadImage(img: string) {
  const isPictureValid = img.match(/[^:/]\w+(?=;|,)/);
  let avatar;
  if (isPictureValid) {
    const mimeType = isPictureValid[0];
    const base64Image = img.split(";base64,").pop();
    const buffer = Buffer.from(base64Image, "base64");
    const fileName = `${Date.now()}.${mimeType}`;

    const file = bucket.file(fileName);
    await file.save(buffer, {
      metadata: {
        contentType: `image/${mimeType}`,
      },
    });

    avatar = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(fileName)}?alt=media`;
  }

  return avatar;
}
