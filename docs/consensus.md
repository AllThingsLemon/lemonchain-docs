---
sidebar_position: 2
slug: consensus
---

# Lemon Chain Consensus

Consensus is the mechanism by which nodes in a blockchain network agree on changes to a shared ledger. Using a consensus protocol, participants ensure data is accurate, consistent, and trusted across the network, removing the need for a central authority. This trustless agreement on data and event sequencing allows nodes to maintain identical ledger copies, thereby enabling applications built on the consensus protocol to function correctly.

_The Lemon Chain network uses the Lachesis protocol, which was developed by the Fantom Foundation. You can read about all the features and technicalities in our documentation._

Key Features:
- **Speed:** Lemon Chain facilitates swift transaction processing, ensuring seamless operations in any industry. It is built for real-time transactions, catering to high-volume demands.
- **Scalability:** Lemon Chain is designed for growth, with an infrastructure capable of scaling with increasing users and transactions and performs consistently regardless of network size.
- **Security:** Lemon Chain prioritizes security alongside speed and scalability. Advanced cryptographic techniques and a secure consensus mechanism make it a reliable platform for any high-scale project.

### DPoS - Delegated Proof of Stake
 
A traditional DPoS consensus model aims to create a more inclusive transaction validation system, extending participation opportunities across the network. It aims to involve all members, even those who may not meet the requirements to become validators (unlike Proof of Stake, where only validators can participate in the network).

This model democratizes the network, empowering average users to elect representatives who undertake the task of validating transactions on their behalf. 

Although Lemon Chain does use a DPoS model, there are some minor changes made to it. You can read more about them [here.](/docs/learn/dpos-Lemon Chain)



### DAG - Directed Acyclic Graph

Lemon Chain leverages the power of Directed Acyclic Graph (DAG) technology, which is a type of data structure that is used in distributed ledger technology (DLT). A **directed graph** suggests that the links between entities have a specified direction. An **acyclic graph** suggests that there are no cycles, making it impossible to return to the starting point of a link. **So, a directed acyclic graph (DAG) is one where connections flow in a specific direction and never cycle.** DAGs are different from blockchains in that they do not have blocks. Instead, transactions are linked together in a network. This allows DAG-based DLTs to achieve higher throughput and scalability than traditional blockchains.  

#### How DAG apply to Lemon Chain

Lemon Chain uses DAG with the use of event blocks. Event blocks are small units of data that containt transactions and other information. They are linked together in a DAG, which means that they can be processes in parallel. This allows Lemon Chain to achieve very high throughput, with transaction confirmation times of just a few seconds.

A simplified overview of how DAG works on Lemon Chain:
1. Transactions are submitted to the network. 
2. The transactions are then grouped together into event blocks. 
3. The event blocks are then linked together in a DAG.
4. The DAG is then sorted topologically, which ensures that no transactions depend on transactions that have not yet been confirmed. 
5. Once the DAG is sorted, transactions are confirmed. 

In a block DAG, multiple transaction-containing blocks can be simultaneously created and added to the DAG. There is no specific order for blocks, enabling faster transaction processing times, which is a common problem among leading blockchains that require a consectuive block incorporation.

The use of this system allows for simultaneous transaction processing and validation which results in an immense increase in scalability and speed, offering optimal performance even under high-volume conditions.

### aBFT - Asynchronous Byzantine Fault Tolerance

Asynchronous Byzantine Fault Tolerance (aBFT) allows nodes to independantly reach consensus. It allows a network of nodes to reach agreement on the state of the network, even if some of the nores are malicious or behaving incorrectly. There is no need for nodes to exchange final blocks consecutively to validate transactions; although they do exchange blocks, which is necessary for achieving consensus, this is dont asynchronously. Each node verifies blocks individually, and is not required to incorporate blocks created  by other validators in a sequential order.

This contrasts with pBFT systems such as Bitcoin's, where a block must receive approval from the majority of nodes before it's finalized and sequentially recorded into their blockchain. This process can slow the network during peak traffic periods.

A simplified overview of how aBFT works on Lemon Chain:

**1. Propose a Transaction:** A user within the network proposes a transaction. This could be a transfer of cryptocurrency, execution of a smart contract, or any other operation.

**2. Transaction gets propogated:** After submitting your transaction, it gets propogated until it reaches a validator node where it gets processed.

**3. Individual Validation:** Each node on the network independently validates the transaction against the blockchain's rules. For instance, they check if the initiator has enough balance for a funds transfer.

**4. Node Voting:** After validation, each node votes on whether the transaction is valid or not based on its independent verification. In aBFT, this can be done asynchronously as well, meaning nodes don't need to synchronize with each other for voting.

**5. Consensus and Finalization:** If the majority of the nodes agree that the transaction is valid, then consensus is reached. The transaction is then added to the blockchain. In aBFT, a transaction is considered final after it's added to the blockchain, there are no reversals.

**6. Resilience to Faults:** The "Byzantine" in aBFT refers to Byzantine Faults, where nodes may fail in arbitrary ways including behaving maliciously. aBFT is resilient to these faults and can reach consensus as long as less than a third of the nodes are dishonest or faulty.

Our use of the Asynchronous Byzantine Fault Tolerance (aBFT) consensus model emphasizes security and swift transaction finality. With aBFT, transactions on Lemon Chain are finalized in just a few seconds, making it efficient for real-time applications. It also ensures that our blockchain can tolerate malicious activities or system failures, promising a reliable and secure network that you can trust. 