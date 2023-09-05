import bcrypt from "bcrypt";
import {
	addDoc,
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
	const snapshot = await getDocs(collection(firestore, collectionName));

	const data = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return data;
}

export async function signUp(
	userData: {
		fullname: string;
		email: string;
		password: string;
		role?: string;
	},
	callback: Function
) {
	const q = query(
		collection(firestore, "users"),
		where("email", "==", userData.email)
	);
	const snapshot = await getDocs(q);
	const data = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	if (data.length > 0) {
		callback({
			status: false,
			message: "Email already existssssssssssss",
			coba: "coba aja",
		});
	} else {
		userData.password = await bcrypt.hash(userData.password, 10);
		userData.role = "member";
		await addDoc(collection(firestore, "users"), userData)
			.then(() => {
				callback({
					status: true,
					message: "Register Success",
					coba: "coba aja",
				});
			})
			.catch((err) => {
				callback({
					status: false,
					message: err.message,
					coba: "coba aja",
				});
			});
	}
}

export async function addProduct(
	productData: {
		name: string;
		price: number;
		image: string;
		active: boolean;
	},
	callback: Function
) {
	await addDoc(collection(firestore, "product"), productData)
		.then(() => {
			callback({
				status: true,
				message: "Add Product Success",
				coba: "ini coba ajasih bahwa product berhasil ditambahkan",
			});
		})
		.catch((err) => {
			callback({
				status: true,
				message: err.message,
				coba: "ini coba ajasih bahwa product gagal ditambahkan",
			});
		});
}
