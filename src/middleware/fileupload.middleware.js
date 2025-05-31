import multer from 'multer';

//2. configure storage with filename and location
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        // Make the date string safe for Windows filenames
        const safeDate = new Date().toISOString().replace(/[:.]/g, '-');
        cb(null, safeDate + '-' + file.originalname);
    }
});

export const upload = multer({
    storage: storage,
});