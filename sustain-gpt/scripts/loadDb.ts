import {DataAPIClient} from "@datastax/astra-db-ts"
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"
import { GoogleGenerativeAI,GenerateContentResponse } from "@google/generative-ai";

import "dotenv/config"

const{
    ASTRA_DB_NAMESPACE,
    ASTRA_DB_COLLECTION,
    ASTRA_DB_API_ENDPOINT,
    ASTRA_DB_APPLICATION_TOKEN,
    GEMINI_API_KEY
}=process.env

if(!GEMINI_API_KEY){
    throw new Error("your GEMINI_API_KEY is missing")
}
    const gemini=new GoogleGenerativeAI(GEMINI_API_KEY)

const sustain_data=[
    '',
    '',
]

const client= new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN)
const db=client.db(ASTRA_DB_API_ENDPOINT,{keyspace: ASTRA_DB_NAMESPACE})

const splitter=new RecursiveCharacterTextSplitter({
    chunkSize:512,
    chunkOverlap: 100
})

const createCollection= async()=>{
    const res
}