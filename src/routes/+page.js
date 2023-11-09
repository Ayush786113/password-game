import { Client, Storage, Databases, ID } from "appwrite"

const ENDPOINT = "https://cloud.appwrite.io/v1"
const PROJECT = "654c90f3a03462e127bc"
const BUCKET = "654c9226a98a36c80d6b"
const DATABASE = "654c91833d9acf725fa7"
const COLLECTION = "654c91892cda444f5b21"

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT)

const storage = new Storage(client)
const database = new Databases(client)

export async function load(){
    const data = await database.listDocuments(
        DATABASE,
        COLLECTION
    )

    for(let i = 0; i<data.documents.length; i++){
        const avatarid = data.documents[i].avatar
        const avatar = await storage.getFileDownload(
            BUCKET,
            avatarid
        )
        data.documents[i].avatar = avatar.href
    }

    return {
        "data": data
    }
}