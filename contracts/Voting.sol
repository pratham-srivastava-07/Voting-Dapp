// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    uint totalVotes;
    string[] public candidates;
    mapping(string => uint256) public receivedVotes; // mapping for receiving votes
    mapping (address => bool) public hasVoted;


    constructor(string[] memory _candidateName) {
        candidates = _candidateName;
    }

    function validCandidate(string memory candidateNames) public view returns(bool) {
        for(uint i = 0; i <= candidates.length-1; i++) {
           if ( keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(candidateNames))) return true;
           // hash function to hash the candidate name into candidates[i] array
        }
        return false;
    }

    function voteCandidates(string memory candidateName) public  {
        require(!hasVoted[msg.sender], "You have already voted"); // if user has voted

        require(validCandidate(candidateName)); // valid hai ki nahi hai mtlb array me mila to valid hai wrna nahi

        hasVoted[msg.sender] = true; // now that user has voted ab wo vote nahi kar skta

        receivedVotes[candidateName] += 1; // candidate ko +1 vote assign hua
    }

    function getVotesOfCandidates(string memory _candidateName) public view returns(uint) {
        for(uint i = 0; i <= candidates.length-1; i++) {
            if(keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(_candidateName))) {
                return receivedVotes[_candidateName];
            }
        }
        return 0;
    }
    function getAllCandidates() public view returns(string[] memory) {
        return candidates;
    }
}