import { DataAPIClient } from "@datastax/astra-db-ts";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GoogleGenerativeAI } from "@google/generative-ai";

import "dotenv/config";

type SimilarityMetric="dot_product"|"cosine"|"euclidean"

const {
    ASTRA_DB_NAMESPACE,
    ASTRA_DB_COLLECTION,
    ASTRA_DB_API_ENDPOINT,
    ASTRA_DB_APPLICATION_TOKEN,
    GOOGLE_API_KEY
}=process.env

const googleai=new GoogleGenerativeAI(GOOGLE_API_KEY)

const districtData=""//yet to be defined

const client=new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN)
const db=client.db(ASTRA_DB_API_ENDPOINT,{namespace:ASTRA_DB_NAMESPACE})

const splitter=new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap:100
})

const createCollection = async (similarityMetric = "dot_product") => {
  const res = await db.createCollection(ASTRA_DB_COLLECTION, {
    vector: {
      dimension: 1536,
      metric: similarityMetric,
    },
  });

  console.log(res);
};
