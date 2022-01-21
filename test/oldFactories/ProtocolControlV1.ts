/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newForwarder",
        type: "address",
      },
    ],
    name: "ForwarderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "moduleId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ModuleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "protocolControlAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "moduleAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    name: "RoyaltyTreasuryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTreasury",
        type: "address",
      },
    ],
    name: "TreasuryUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_BPS",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newModuleAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_moduleType",
        type: "uint256",
      },
    ],
    name: "addModule",
    outputs: [
      {
        internalType: "bytes32",
        name: "moduleId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_moduleType",
        type: "uint256",
      },
    ],
    name: "getAllModulesOfType",
    outputs: [
      {
        internalType: "address[]",
        name: "allModules",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "moduleAddress",
        type: "address",
      },
    ],
    name: "getRoyaltyTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "modules",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "numOfModuleType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "royaltyTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_URI",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "setForwarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "moduleAddress",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setModuleRoyaltyTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setRoyaltyTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_moduleId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newModuleAddress",
        type: "address",
      },
    ],
    name: "updateModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002798380380620027988339810160408190526200003491620002c7565b805162000049906008906020840190620001ee565b50600580546001600160a01b0385166001600160a01b03199182161790915560068054909116301790556200008060008362000089565b50505062000408565b62000095828262000099565b5050565b620000b08282620000dc60201b6200170b1760201c565b6000828152600160209081526040909120620000d7918390620017a96200017c821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000095576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001383390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000193836001600160a01b0384166200019c565b90505b92915050565b6000818152600183016020526040812054620001e55750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000196565b50600062000196565b828054620001fc90620003cb565b90600052602060002090601f0160209004810192826200022057600085556200026b565b82601f106200023b57805160ff19168380011785556200026b565b828001600101855582156200026b579182015b828111156200026b5782518255916020019190600101906200024e565b50620002799291506200027d565b5090565b5b808211156200027957600081556001016200027e565b80516001600160a01b0381168114620002ac57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600060608486031215620002dd57600080fd5b620002e88462000294565b92506020620002f981860162000294565b60408601519093506001600160401b03808211156200031757600080fd5b818701915087601f8301126200032c57600080fd5b815181811115620003415762000341620002b1565b604051601f8201601f19908116603f011681019083821181831017156200036c576200036c620002b1565b816040528281528a868487010111156200038557600080fd5b600093505b82841015620003a957848401860151818501870152928501926200038a565b82841115620003bb5760008684830101525b8096505050505050509250925092565b600181811c90821680620003e057607f821691505b602082108114156200040257634e487b7160e01b600052602260045260246000fd5b50919050565b61238080620004186000396000f3fe6080604052600436106101995760003560e01c8063938e3d7b116100e1578063b9998a241161008a578063d547741f11610064578063d547741f14610508578063e8a3d48514610528578063f2aab4b31461054a578063fd967f471461056a57600080fd5b8063b9998a24146104a8578063c097b1fb146104c8578063ca15c873146104e857600080fd5b8063a217fddf116100bb578063a217fddf14610430578063aca8417514610445578063b0b6cc1a1461047257600080fd5b8063938e3d7b146103db57806396362d32146103fb578063a00425261461041b57600080fd5b80633b98a7df116101435780637b1039991161011d5780637b103999146103575780639010d07c1461037757806391d148541461039757600080fd5b80633b98a7df146102ea5780633fff7bf81461030a5780634d8188851461033757600080fd5b8063248a9ca311610174578063248a9ca31461026c5780632f2ff15d146102aa57806336568abe146102ca57600080fd5b80620fa9fb146101dd57806301ffc9a7146101ff57806305e9ca9b1461023457600080fd5b366101d857604080513381523460208201527f1e57e3bb474320be3d2c77138f75b7c3941292d647f5f9634e33a8e94e0e069b910160405180910390a1005b600080fd5b3480156101e957600080fd5b506101fd6101f8366004611f52565b6105a1565b005b34801561020b57600080fd5b5061021f61021a366004611f8b565b610c09565b60405190151581526020015b60405180910390f35b34801561024057600080fd5b50600654610254906001600160a01b031681565b6040516001600160a01b03909116815260200161022b565b34801561027857600080fd5b5061029c610287366004611fb5565b60009081526020819052604090206001015490565b60405190815260200161022b565b3480156102b657600080fd5b506101fd6102c5366004611fce565b610c34565b3480156102d657600080fd5b506101fd6102e5366004611fce565b610c5f565b3480156102f657600080fd5b506101fd610305366004611ff3565b610ceb565b34801561031657600080fd5b5061029c610325366004611fb5565b60036020526000908152604090205481565b34801561034357600080fd5b506101fd610352366004611f52565b610e4f565b34801561036357600080fd5b50600554610254906001600160a01b031681565b34801561038357600080fd5b50610254610392366004612010565b610fc3565b3480156103a357600080fd5b5061021f6103b2366004611fce565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156103e757600080fd5b506101fd6103f6366004612032565b610fe2565b34801561040757600080fd5b5061029c6104163660046120a4565b611092565b34801561042757600080fd5b506102546111e9565b34801561043c57600080fd5b5061029c600081565b34801561045157600080fd5b50610465610460366004611fb5565b611297565b60405161022b91906120d0565b34801561047e57600080fd5b5061025461048d366004611fb5565b6002602052600090815260409020546001600160a01b031681565b3480156104b457600080fd5b506101fd6104c3366004611ff3565b611388565b3480156104d457600080fd5b506101fd6104e3366004611fce565b611480565b3480156104f457600080fd5b5061029c610503366004611fb5565b611607565b34801561051457600080fd5b506101fd610523366004611fce565b61161e565b34801561053457600080fd5b5061053d611644565b60405161022b919061214d565b34801561055657600080fd5b50610254610565366004611ff3565b6116d6565b34801561057657600080fd5b5061058061271081565b6040516fffffffffffffffffffffffffffffffff909116815260200161022b565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1661064a5760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e00000060648201526084015b60405180910390fd5b600554604080516361d027b360e01b815290516001600160a01b0390921691839160009184916361d027b3916004808301926020929190829003018186803b15801561069557600080fd5b505afa1580156106a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cd9190612180565b90506000806001600160a01b0386166106e7575047610761565b6040516370a0823160e01b81523060048201526001600160a01b038516906370a082319060240160206040518083038186803b15801561072657600080fd5b505afa15801561073a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075e919061219d565b90505b604051630e78de6f60e31b8152306004820152612710906001600160a01b038716906373c6f3789060240160206040518083038186803b1580156107a457600080fd5b505afa1580156107b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dc919061219d565b6107e690836121cc565b6107f091906121eb565b91506107fc828261220d565b90506001600160a01b0386166109bb576000876001600160a01b03168260405160006040518083038185875af1925050503d8060008114610859576040519150601f19603f3d011682016040523d82523d6000602084013e61085e565b606091505b50509050806108af5760405162461bcd60e51b815260206004820152601860248201527f6661696c656420746f2077697468647261772066756e647300000000000000006044820152606401610641565b6000846001600160a01b03168460405160006040518083038185875af1925050503d80600081146108fc576040519150601f19603f3d011682016040523d82523d6000602084013e610901565b606091505b505090508061095e5760405162461bcd60e51b8152602060048201526024808201527f6661696c656420746f2077697468647261772066756e647320746f20726567696044820152637374727960e01b6064820152608401610641565b876001600160a01b0316896001600160a01b03167f080a49aa43b33f2f3fe14496cbedde2305f0cc484e98afb78e943cf9881adc8a85876040516109ac929190918252602082015260400190565b60405180910390a35050610c00565b6001600160a01b0384166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908a16602482015260448101849052606401602060405180830381600087803b158015610a1b57600080fd5b505af1158015610a2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a539190612224565b610a9f5760405162461bcd60e51b815260206004820152601a60248201527f6661696c656420746f207472616e73666572207061796d656e740000000000006044820152606401610641565b6001600160a01b0384166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908616602482015260448101859052606401602060405180830381600087803b158015610aff57600080fd5b505af1158015610b13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b379190612224565b610ba95760405162461bcd60e51b815260206004820152602660248201527f6661696c656420746f207472616e73666572207061796d656e7420746f20726560448201527f67697374727900000000000000000000000000000000000000000000000000006064820152608401610641565b856001600160a01b0316876001600160a01b03167f080a49aa43b33f2f3fe14496cbedde2305f0cc484e98afb78e943cf9881adc8a8385604051610bf7929190918252602082015260400190565b60405180910390a35b50505050505050565b60006001600160e01b03198216635a05180f60e01b1480610c2e5750610c2e826117be565b92915050565b600082815260208190526040902060010154610c5081336117f3565b610c5a8383611871565b505050565b6001600160a01b0381163314610cdd5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610641565b610ce78282611893565b5050565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16610d8f5760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e0000006064820152608401610641565b610d98816118b5565b610df65760405162461bcd60e51b815260206004820152602960248201527f50726f746f636f6c436f6e74726f6c3a2070726f766964657220736861726573604482015268103a37b7903637bb9760b91b6064820152608401610641565b600680546001600160a01b0319166001600160a01b03831690811790915560405190815260009030907f55a6d5ecee94ad7f72b42efa05adae50807422b98f5c511cf7f0a0205b65b7519060200160405180910390a350565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16610ef35760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e0000006064820152608401610641565b610efc816118b5565b610f5a5760405162461bcd60e51b815260206004820152602960248201527f50726f746f636f6c436f6e74726f6c3a2070726f766964657220736861726573604482015268103a37b7903637bb9760b91b6064820152608401610641565b6001600160a01b0382811660008181526004602090815260409182902080546001600160a01b03191694861694851790559051928352909130917f55a6d5ecee94ad7f72b42efa05adae50807422b98f5c511cf7f0a0205b65b751910160405180910390a35050565b6000828152600160205260408120610fdb9083611ae2565b9392505050565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff166110865760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e0000006064820152608401610641565b610c5a60088383611ea1565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604081205460ff166111365760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e0000006064820152608401610641565b506000818152600360208181526040808420805482518085018290528084018890528351808203850181526060909101909352825192840192909220868652939092529192600192611189908490612246565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0387169081179091559051909183917ff0d0fe9ecd941ad0096a6b95e0998ddcd76ba6a240a106fef284fc2d4f0caa419190a392915050565b6007546000906001600160a01b031661128757600560009054906101000a90046001600160a01b03166001600160a01b031663f645d4f96040518163ffffffff1660e01b815260040160206040518083038186803b15801561124a57600080fd5b505afa15801561125e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112829190612180565b905090565b506007546001600160a01b031690565b6000818152600360205260409020546060908067ffffffffffffffff8111156112c2576112c261225e565b6040519080825280602002602001820160405280156112eb578160200160208202803683370190505b50915060005b8181101561138157604080516020810183905290810185905260009060600160408051601f1981840301815291815281516020928301206000818152600290935291205485519192506001600160a01b03169085908490811061135657611356612274565b6001600160a01b03909216602092830291909101909101525061137a600182612246565b90506112f1565b5050919050565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1661142c5760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e0000006064820152608401610641565b600780546001600160a01b0319166001600160a01b0383169081179091556040519081527f9d90a82ec1d038d4e13317a0eb136f9c65b7ed42156fc204ec4b7c4731e739509060200160405180910390a150565b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff166115245760405162461bcd60e51b815260206004820152603d60248201527f50726f746f636f6c436f6e74726f6c3a204f6e6c792070726f746f636f6c206160448201527f646d696e732063616e2063616c6c20746869732066756e6374696f6e2e0000006064820152608401610641565b6000828152600260205260409020546001600160a01b03166115ae5760405162461bcd60e51b815260206004820152603660248201527f50726f746f636f6c436f6e74726f6c3a2061206d6f64756c652077697468207460448201527f68697320494420646f6573206e6f742065786973742e000000000000000000006064820152608401610641565b60008281526002602052604080822080546001600160a01b0319166001600160a01b0385169081179091559051909184917ff0d0fe9ecd941ad0096a6b95e0998ddcd76ba6a240a106fef284fc2d4f0caa419190a35050565b6000818152600160205260408120610c2e90611aee565b60008281526020819052604090206001015461163a81336117f3565b610c5a8383611893565b6060600880546116539061228a565b80601f016020809104026020016040519081016040528092919081815260200182805461167f9061228a565b80156116cc5780601f106116a1576101008083540402835291602001916116cc565b820191906000526020600020905b8154815290600101906020018083116116af57829003601f168201915b5050505050905090565b6001600160a01b0380821660009081526004602052604081205490911680610c2e5750506006546001600160a01b0316919050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610ce7576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556117653390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610fdb836001600160a01b038416611af8565b60006001600160e01b03198216637965db0b60e01b1480610c2e57506301ffc9a760e01b6001600160e01b0319831614610c2e565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610ce75761182f816001600160a01b03166014611b47565b61183a836020611b47565b60405160200161184b9291906122c5565b60408051601f198184030181529082905262461bcd60e51b82526106419160040161214d565b61187b828261170b565b6000828152600160205260409020610c5a90826117a9565b61189d8282611cf0565b6000828152600160205260409020610c5a9082611d6f565b600554604080516361d027b360e01b8152905160009284926001600160a01b0391821692859285169163ce7c2ac29185916361d027b3916004808301926020929190829003018186803b15801561190b57600080fd5b505afa15801561191f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119439190612180565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260240160206040518083038186803b15801561198257600080fd5b505afa158015611996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ba919061219d565b90506000836001600160a01b0316633a98ef396040518163ffffffff1660e01b815260040160206040518083038186803b1580156119f757600080fd5b505afa158015611a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2f919061219d565b9050600081611a40612710856121cc565b611a4a91906121eb565b604051630e78de6f60e31b8152306004820152909150600a9081906001600160a01b038716906373c6f3789060240160206040518083038186803b158015611a9157600080fd5b505afa158015611aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac9919061219d565b611ad3919061220d565b90911015979650505050505050565b6000610fdb8383611d84565b6000610c2e825490565b6000818152600183016020526040812054611b3f57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610c2e565b506000610c2e565b60606000611b568360026121cc565b611b61906002612246565b67ffffffffffffffff811115611b7957611b7961225e565b6040519080825280601f01601f191660200182016040528015611ba3576020820181803683370190505b509050600360fc1b81600081518110611bbe57611bbe612274565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611bed57611bed612274565b60200101906001600160f81b031916908160001a9053506000611c118460026121cc565b611c1c906001612246565b90505b6001811115611ca1577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611c5d57611c5d612274565b1a60f81b828281518110611c7357611c73612274565b60200101906001600160f81b031916908160001a90535060049490941c93611c9a81612346565b9050611c1f565b508315610fdb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610641565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610ce7576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610fdb836001600160a01b038416611dae565b6000826000018281548110611d9b57611d9b612274565b9060005260206000200154905092915050565b60008181526001830160205260408120548015611e97576000611dd260018361220d565b8554909150600090611de69060019061220d565b9050818114611e4b576000866000018281548110611e0657611e06612274565b9060005260206000200154905080876000018481548110611e2957611e29612274565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611e5c57611e5c61235d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610c2e565b6000915050610c2e565b828054611ead9061228a565b90600052602060002090601f016020900481019282611ecf5760008555611f15565b82601f10611ee85782800160ff19823516178555611f15565b82800160010185558215611f15579182015b82811115611f15578235825591602001919060010190611efa565b50611f21929150611f25565b5090565b5b80821115611f215760008155600101611f26565b6001600160a01b0381168114611f4f57600080fd5b50565b60008060408385031215611f6557600080fd5b8235611f7081611f3a565b91506020830135611f8081611f3a565b809150509250929050565b600060208284031215611f9d57600080fd5b81356001600160e01b031981168114610fdb57600080fd5b600060208284031215611fc757600080fd5b5035919050565b60008060408385031215611fe157600080fd5b823591506020830135611f8081611f3a565b60006020828403121561200557600080fd5b8135610fdb81611f3a565b6000806040838503121561202357600080fd5b50508035926020909101359150565b6000806020838503121561204557600080fd5b823567ffffffffffffffff8082111561205d57600080fd5b818501915085601f83011261207157600080fd5b81358181111561208057600080fd5b86602082850101111561209257600080fd5b60209290920196919550909350505050565b600080604083850312156120b757600080fd5b82356120c281611f3a565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156121115783516001600160a01b0316835292840192918401916001016120ec565b50909695505050505050565b60005b83811015612138578181015183820152602001612120565b83811115612147576000848401525b50505050565b602081526000825180602084015261216c81604085016020870161211d565b601f01601f19169190910160400192915050565b60006020828403121561219257600080fd5b8151610fdb81611f3a565b6000602082840312156121af57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156121e6576121e66121b6565b500290565b60008261220857634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561221f5761221f6121b6565b500390565b60006020828403121561223657600080fd5b81518015158114610fdb57600080fd5b60008219821115612259576122596121b6565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061229e57607f821691505b602082108114156122bf57634e487b7160e01b600052602260045260246000fd5b50919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516122fd81601785016020880161211d565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161233a81602884016020880161211d565b01602801949350505050565b600081612355576123556121b6565b506000190190565b634e487b7160e01b600052603160045260246000fdfea164736f6c6343000809000a";

type ProtocolControlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolControlConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolControlV1__factory extends ContractFactory {
  constructor(...args: ProtocolControlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _registry: string,
    _admin: string,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<any> {
    return super.deploy(
      _registry,
      _admin,
      _uri,
      overrides || {},
    ) as Promise<any>;
  }
  getDeployTransaction(
    _registry: string,
    _admin: string,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_registry, _admin, _uri, overrides || {});
  }
  attach(address: string): any {
    return super.attach(address) as any;
  }
  connect(signer: Signer): ProtocolControlV1__factory {
    return super.connect(signer) as ProtocolControlV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): any {
    return new utils.Interface(_abi) as any;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): any {
    return new Contract(address, _abi, signerOrProvider) as any;
  }
}
