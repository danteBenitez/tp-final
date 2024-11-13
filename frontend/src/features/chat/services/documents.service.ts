type TDocument = {
  id: number;
  original_filename: string;
  user_id: string;
};

export async function getUserDocuments(user_id: string | null) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/users/${user_id}/documents`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los documentos.");
    }

    const data = await response.json();

    console.log("getUserDocuments", data);

    return data as TDocument[];
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDocument(user_id: string, document_id: string) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/users/${user_id}/documents/${document_id}`
    );

    if (!response.ok) {
      throw new Error("Error al obtener el documento.");
    }

    const data = await response.json();

    console.log("getUserDocument", data);

    return data as TDocument;
  } catch (error) {
    console.log(error);
  }
}