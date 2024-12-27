---
sidebar_position: 1
---

# Specifications

A validator is an individual tasked with the verification of transactions and the production of blocks within the blockchain.

**Minimum requirements to run a validator node:** 250 LEMX

**Max validator node capacity:** 10x the self-staked amount

**Validator reward:** part of the gas fees

**Unbonding time:** 7 days

## Parameters
- Minimum hardware requirements: AWS EC2 m5.2xlarge with 8 vCPUs (3.1 GHz) and at least 1 TB of Amazon EBS General
- Purpose SSD (gp2) storage (or equivalent).
- Rewards: part of the gas fees

## Weight
#### n= total amount of validators
#### t= total amount of tokens staked collectively
#### Transaction Approval Formulas:
#### Validator Amount = ($\frac{2}{3}$)n+1
#### Token Amount= ($\frac{2}{3}$)t+10<sup>-18</sup>



Validators are the ones who make sure all transactions are correct. These validators need to "stake" (or lock up) LEMX tokens, which is Lemon Chain's cryptocurrency, to have a say in validating transactions.

How much say a validator gets (their weight) depends on how many LEMX tokens they've staked. More tokens staked means more weight, and more weight means more influence when validating transactions.

To approve anything (like adding a new block of transactions to the blockchain), at least $\frac{2}{3}$ of the **total weight** of all validators need to agree. This is called the **quorum**. 

So, the more LEMX tokens staked overall, the more validators (or weight) would be needed to reach this quorum, which makes the system more secure. This is because if someone wanted to do something bad, like manipulate transactions, they'd need to not only control over $\frac{2}{3}$ of the total staked LEMX, but also control over $\frac{2}{3}$ of the total validators, which is very difficult and expensive to do.

### Imagine the following scenario:

There are a total of 12,000,000 LEMX tokens staked between 120 validators. 

In order for a transaction to be final, ($\frac{2}{3}$)n+1 of the validators have to attest for the transaction **AND** their collective stake has to be ($\frac{2}{3}$)t+10<sup>-18</sup> of the total amount staked.

**($\frac{2}{3}$)120+1= 81 validators**  
**($\frac{2}{3}$)12,000,000+10<sup>-18</sup> -> 8,000,000.00000000000000001 tokens**

The transaction will only be final only if at least 81 validators attest the transaction and their collective stake is at least 8,000,000.00000000000000001 tokens

### Analogy

**Validators= councillors**  
**LEMX tokens= dollars**

Consider a town with 120 councillors (validators), and they collectively have 12,000,000 dollars (LEMX tokens) in the town's treasury.

To pass a law (finalize a transaction), more than two-thirds of the councillors must agree (attest) to it. But it's not just about the number of agreeing councillors; the total money they control in the town's treasury must also be more than two-thirds of the total amount in the treasury.

Following the formulas:  

**Number of Councillors = ($\frac{2}{3}$) * total councillors + 1 = ($\frac{2}{3}$) * 120 + 1 = 81 councillors.**

**Amount of Money = ($\frac{2}{3}$) * total amount + a very small number (10^-18) = ($\frac{2}{3}$) * 12,000,000 + 10^-18 = 8,000,000.00000000000000001 dollars.**

Therefore, to pass the law, at least 81 councillors must agree, and the total money they control in the town's treasury should be a tiny bit more than 8,000,000 dollars.

## Slashing

#### What is Slashing?

Slashing is a critical security measure implemented in proof of stake (PoS) and delegated proof of stake (DPoS) blockchains, such as Lemon Chain, to deter validators from engaging in harmful or dishonest activities. This mechanism ensures the integrity and security of the blockchain network by penalizing validators for malicious actions.

As validators play a crucial role in maintaining network operations, when they violate network rules or act maliciously, they face slashing consequences. This action results in the forfeiture of the validator's entire staked cryptocurrencies (LEMX) and their subsequent forceful removal from their network role, upholding the network's overall health and security.

#### The Importance of Slashing in PoS Systems

1. **Prevention of Attacks:** Slashing is designed to safeguard against network attacks by ensuring that validators have a financial stake at risk.
2. **Integrity Maintenance:** By penalizing dishonest actions, slashing helps maintain the overall integrity of the blockchain.

#### Ways Validators Can Be Slashed

**Validators on the Lemon Chain blockchain can be slashed for several reasons, including:**

- Proposing and signing conflicting blocks.
- Attesting to blocks in a way that could alter the blockchain's history.

#### Consequences for Delegators
If a validator is slashed due to malicious actions, stakeholders who have delegated their LEMX to the validator also lose their stake. This policy is integral to the health and security of the Lemon Chain network, ensuring that all participants bear responsibility for maintaining network integrity.



