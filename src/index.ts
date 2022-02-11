// TypeScript 에서의 import
import * as CryptoJS from "crypto-js"; // 해쉬 함수를 통해 암호하를 할 수 있도록 해주는 패키지

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // static method, 클래스가 생성되지 않았어도 클래스 안에서 호출할 수 있는 method
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "2020200202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

// Block 객체들의 전체 배열을 리턴
const getBlockchain = (): Block[] => blockchain;
// 가장 최근의 Block 객체를 리턴
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index++;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {};
