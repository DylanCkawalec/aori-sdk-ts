/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  AoriVaultBlast,
  AoriVaultBlastInterface,
} from "../AoriVaultBlast";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_aoriProtocol",
        type: "address",
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
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Call",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "BLAST",
    outputs: [
      {
        internalType: "contract IBlast",
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
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "inputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "inputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "inputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "inputZone",
                type: "address",
              },
              {
                internalType: "address",
                name: "outputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "outputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "outputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "outputZone",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "counter",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "toWithdraw",
                type: "bool",
              },
            ],
            internalType: "struct IAoriV2.Order",
            name: "makerOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "inputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "inputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "inputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "inputZone",
                type: "address",
              },
              {
                internalType: "address",
                name: "outputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "outputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "outputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "outputZone",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "counter",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "toWithdraw",
                type: "bool",
              },
            ],
            internalType: "struct IAoriV2.Order",
            name: "takerOrder",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "makerSignature",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "takerSignature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "blockDeadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seatNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seatHolder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "seatPercentOfFees",
            type: "uint256",
          },
        ],
        internalType: "struct IAoriV2.MatchingDetails",
        name: "matching",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "hookData",
        type: "bytes",
      },
    ],
    name: "afterAoriTrade",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "aoriProtocol",
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
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "inputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "inputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "inputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "inputZone",
                type: "address",
              },
              {
                internalType: "address",
                name: "outputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "outputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "outputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "outputZone",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "counter",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "toWithdraw",
                type: "bool",
              },
            ],
            internalType: "struct IAoriV2.Order",
            name: "makerOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "inputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "inputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "inputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "inputZone",
                type: "address",
              },
              {
                internalType: "address",
                name: "outputToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "outputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "outputChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "outputZone",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "counter",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "toWithdraw",
                type: "bool",
              },
            ],
            internalType: "struct IAoriV2.Order",
            name: "takerOrder",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "makerSignature",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "takerSignature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "blockDeadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seatNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seatHolder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "seatPercentOfFees",
            type: "uint256",
          },
        ],
        internalType: "struct IAoriV2.MatchingDetails",
        name: "matching",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "hookData",
        type: "bytes",
      },
    ],
    name: "beforeAoriTrade",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Instruction[]",
        name: "instructions",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "managers",
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
        internalType: "address",
        name: "_aoriProtocol",
        type: "address",
      },
    ],
    name: "setAoriProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isManager",
        type: "bool",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080346200019157620014e090600090601f38849003908101601f19168201906001600160401b038211838310176200017d578083916040968794855283398101031262000179576200006060206200005883620001c0565b9201620001c0565b60018060a01b038092169160018060a01b0319918383865416178555838552600160205285852060ff19906001828254161790553086526001878720918254161790551690600254161760025573430000000000000000000000000000000000000290813b1562000155578351634e606c4760e01b8152838160048183875af180156200016f5762000159575b50813b15620001555782916024839286519485938492631d70c8d360e31b845260048401525af180156200014b5762000130575b825161130a9081620001d68239f35b6200013c829162000196565b62000148578062000121565b80fd5b83513d84823e3d90fd5b8280fd5b620001679093919362000196565b9138620000ed565b85513d86823e3d90fd5b5080fd5b634e487b7160e01b84526041600452602484fd5b600080fd5b6001600160401b038111620001aa57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620001915756fe60806040526004361015610018575b361561001657005b005b60003560e01c806301ffc9a7146100f457806309cae2c8146100eb5780631626ba7e146100e25780633f707e6b146100d95780636cd2bc88146100d05780637ad28a59146100c757806397d75776146100be578063a5e90eee146100b5578063a9cfc240146100ac578063f11b9f15146100a35763fdff9b4d0361000e5761009e610a33565b61000e565b5061009e6109e0565b5061009e6109c5565b5061009e61089b565b5061009e610843565b5061009e61081e565b5061009e610680565b5061009e610590565b5061009e610509565b5061009e610220565b50346101b45760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b4576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101b457807f7ad28a59000000000000000000000000000000000000000000000000000000006020921490811561018a575b506040519015158152f35b7fa9cfc240000000000000000000000000000000000000000000000000000000009150143861017f565b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101b457565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101b457565b359073ffffffffffffffffffffffffffffffffffffffff821682036101b457565b50346101b45760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b4576102586101b9565b61035f73ffffffffffffffffffffffffffffffffffffffff6102786101dc565b926102b56102b06102a93373ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b5460ff1690565b611225565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260209485939192909116908383602481855afa9283156103d2575b6000936103a3575b5060006040518096819582947fa9059cbb000000000000000000000000000000000000000000000000000000008452600484016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af18015610396575b61037057005b8161001692903d1061038f575b6103878183610438565b8101906112bf565b503d61037d565b61039e610de9565b61036a565b6103c4919350843d86116103cb575b6103bc8183610438565b8101906112b0565b9138610304565b503d6103b2565b6103da610de9565b6102fc565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6060810190811067ffffffffffffffff82111761042b57604052565b6104336103df565b604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761042b57604052565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff81116104b5575b01160190565b6104bd6103df565b6104af565b81601f820112156101b4578035906104d982610479565b926104e76040519485610438565b828452602083830101116101b457816000926020809301838601378301015290565b50346101b45760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b45760243567ffffffffffffffff81116101b45761056661055e60209236906004016104c2565b600435610df6565b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b5060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b45760043567ffffffffffffffff8082116101b457366023830112156101b45781600401359081116101b4573660248260051b840101116101b45733600052600160205260ff6040600020541615610622576100169161061d916024369201610b29565b61111c565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4f6e6c792061206d616e616765722063616e20657865637574650000000000006044820152fd5b50346101b45760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b4576106b86101b9565b33600052600160205260ff6040600020541615610714576100169073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff00000000000000000000000000000000000000006002541617600255565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4f6e6c7920746865206f776e65722063616e2073657420746865206e6577206160448201527f6f726950726f746f636f6c0000000000000000000000000000000000000000006064820152fd5b907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc906040828401126101b45760043567ffffffffffffffff928382116101b4576104409082860301126101b45760040192602435908382116101b457806023830112156101b45781600401359384116101b457602484830101116101b4576024019190565b50346101b457602061083961083236610798565b9150610c47565b6040519015158152f35b50346101b45760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b45760206040517343000000000000000000000000000000000000028152f35b801515036101b457565b50346101b45760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b4576108d36101b9565b6024356108df81610891565b73ffffffffffffffffffffffffffffffffffffffff80600054163303610941576100169216600052600160205260406000209060ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691151516179055565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60448201527f6e000000000000000000000000000000000000000000000000000000000000006064820152fd5b50346101b45760206108396109d936610798565b9150610d2d565b50346101b45760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b457602073ffffffffffffffffffffffffffffffffffffffff60025416604051908152f35b50346101b45760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b45773ffffffffffffffffffffffffffffffffffffffff610a806101b9565b166000526001602052602060ff604060002054166040519015158152f35b15610aa557565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f6e6c792061206d616e616765722063616e20666f726365207468652065786560448201527f637574696f6e206f6620746869732074726164650000000000000000000000006064820152fd5b9291909267ffffffffffffffff808511610bd9575b8460051b60409384519460208096610b5882860182610438565b8099815201928501948286116101b45780935b868510610b7c575050505050505050565b84358681116101b45782016060818603126101b457835191610b9d8361040f565b610ba6826101ff565b8352898201358a84015284820135928884116101b457610bca878c958695016104c2565b86820152815201940193610b6b565b610be16103df565b610b3e565b9080601f830112156101b457816020610c0193359101610b29565b90565b9190916040818403126101b45767ffffffffffffffff9281358481116101b45781610c30918401610be6565b9360208301359081116101b457610c019201610be6565b908015610d2657326000526001602052610c6860ff60406000205416610a9e565b73ffffffffffffffffffffffffffffffffffffffff600254163303610ca25781610c9791610c9d930190610c04565b5061111c565b600190565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4f6e6c7920616f726950726f746f636f6c2063616e20696e746572616374207760448201527f697468207468697320636f6e74726163740000000000000000000000000000006064820152fd5b5050600190565b908015610d2657326000526001602052610d4e60ff60406000205416610a9e565b73ffffffffffffffffffffffffffffffffffffffff600254163303610d845781610d7d91610c9d930190610c04565b905061111c565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f6e6c7920616f726950726f746f636f6c2063616e20747261646500000000006044820152fd5b156101b457565b506040513d6000823e3d90fd5b6020610ef692610e096041825114610de2565b818101519060606040820151910151916000958693841a9285858589610e508588604051948594859094939260ff6060936080840197845216602083015260408201520152565b838052039060015afa15610fab575b845196604051610ecc81610ea08a82019485603c917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008252601c8201520190565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610438565b51902092604051948594859094939260ff6060936080840197845216602083015260408201520152565b838052039060015afa15610f9e575b610f346102a983519273ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b908115610f69575b50610f445790565b507f1626ba7e0000000000000000000000000000000000000000000000000000000090565b610f9891506102a99073ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b38610f3c565b610fa6610de9565b610f05565b610fb3610de9565b610e5f565b8051821015610fcc5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3d15611026573d9061100c82610479565b9161101a6040519384610438565b82523d6000602084013e565b606090565b1561103257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f43616c6c20746f2065787465726e616c2066756e6374696f6e206661696c65646044820152fd5b919073ffffffffffffffffffffffffffffffffffffffff90949394168252602090818301526060604083015283519384606084015260005b858110611108575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006080809697860101520116010190565b8181018301518482016080015282016110c8565b80519060005b82811061112e57505050565b7f58920bab8ebe20f458895b68243189a021c51741421c3d98eff715b8e5afe1fa61117761115c8385610fb8565b515173ffffffffffffffffffffffffffffffffffffffff1690565b6020906111c4826111888688610fb8565b5101519260406111ba6000808361119f8b8d610fb8565b51015194855190860189895af16111b4610ffb565b5061102b565b5193849384611090565b0390a17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111f657600101611122565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b1561122c57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4f6e6c79206f776e6572206f72207468697320636f6e74726163742063616e2060448201527f65786563757465000000000000000000000000000000000000000000000000006064820152fd5b908160209103126101b4575190565b908160209103126101b45751610c018161089156fea2646970667358221220b59e7ef44b75f0ad346ac68be25606cdeb2720f537a4908d136e53c225a43cc764736f6c63430008110033";

type AoriVaultBlastConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AoriVaultBlastConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AoriVaultBlast__factory extends ContractFactory {
  constructor(...args: AoriVaultBlastConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owner: AddressLike,
    _aoriProtocol: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_owner, _aoriProtocol, overrides || {});
  }
  override deploy(
    _owner: AddressLike,
    _aoriProtocol: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_owner, _aoriProtocol, overrides || {}) as Promise<
      AoriVaultBlast & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AoriVaultBlast__factory {
    return super.connect(runner) as AoriVaultBlast__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AoriVaultBlastInterface {
    return new Interface(_abi) as AoriVaultBlastInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AoriVaultBlast {
    return new Contract(address, _abi, runner) as unknown as AoriVaultBlast;
  }
}
