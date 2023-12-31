/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ArtistPoolFormationInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addArtist"
      | "artists"
      | "getAllArtists"
      | "isArtistInPool"
      | "removeArtist"
      | "selectFirstArtist"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ArtistAdded"
      | "ArtistRemoved"
      | "FirstArtistSelected"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addArtist",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "artists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllArtists",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isArtistInPool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeArtist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectFirstArtist",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addArtist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "artists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllArtists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isArtistInPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeArtist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectFirstArtist",
    data: BytesLike
  ): Result;
}

export namespace ArtistAddedEvent {
  export type InputTuple = [artistAddress: AddressLike, artistName: string];
  export type OutputTuple = [artistAddress: string, artistName: string];
  export interface OutputObject {
    artistAddress: string;
    artistName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ArtistRemovedEvent {
  export type InputTuple = [artistAddress: AddressLike];
  export type OutputTuple = [artistAddress: string];
  export interface OutputObject {
    artistAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FirstArtistSelectedEvent {
  export type InputTuple = [artistAddress: AddressLike];
  export type OutputTuple = [artistAddress: string];
  export interface OutputObject {
    artistAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ArtistPoolFormation extends BaseContract {
  connect(runner?: ContractRunner | null): ArtistPoolFormation;
  waitForDeployment(): Promise<this>;

  interface: ArtistPoolFormationInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addArtist: TypedContractMethod<
    [_artistAddress: AddressLike, _artistName: string],
    [void],
    "nonpayable"
  >;

  artists: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { artistAddress: string; artistName: string }],
    "view"
  >;

  getAllArtists: TypedContractMethod<[], [string[]], "view">;

  isArtistInPool: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  removeArtist: TypedContractMethod<
    [_artistAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  selectFirstArtist: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addArtist"
  ): TypedContractMethod<
    [_artistAddress: AddressLike, _artistName: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "artists"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { artistAddress: string; artistName: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllArtists"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "isArtistInPool"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeArtist"
  ): TypedContractMethod<[_artistAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "selectFirstArtist"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ArtistAdded"
  ): TypedContractEvent<
    ArtistAddedEvent.InputTuple,
    ArtistAddedEvent.OutputTuple,
    ArtistAddedEvent.OutputObject
  >;
  getEvent(
    key: "ArtistRemoved"
  ): TypedContractEvent<
    ArtistRemovedEvent.InputTuple,
    ArtistRemovedEvent.OutputTuple,
    ArtistRemovedEvent.OutputObject
  >;
  getEvent(
    key: "FirstArtistSelected"
  ): TypedContractEvent<
    FirstArtistSelectedEvent.InputTuple,
    FirstArtistSelectedEvent.OutputTuple,
    FirstArtistSelectedEvent.OutputObject
  >;

  filters: {
    "ArtistAdded(address,string)": TypedContractEvent<
      ArtistAddedEvent.InputTuple,
      ArtistAddedEvent.OutputTuple,
      ArtistAddedEvent.OutputObject
    >;
    ArtistAdded: TypedContractEvent<
      ArtistAddedEvent.InputTuple,
      ArtistAddedEvent.OutputTuple,
      ArtistAddedEvent.OutputObject
    >;

    "ArtistRemoved(address)": TypedContractEvent<
      ArtistRemovedEvent.InputTuple,
      ArtistRemovedEvent.OutputTuple,
      ArtistRemovedEvent.OutputObject
    >;
    ArtistRemoved: TypedContractEvent<
      ArtistRemovedEvent.InputTuple,
      ArtistRemovedEvent.OutputTuple,
      ArtistRemovedEvent.OutputObject
    >;

    "FirstArtistSelected(address)": TypedContractEvent<
      FirstArtistSelectedEvent.InputTuple,
      FirstArtistSelectedEvent.OutputTuple,
      FirstArtistSelectedEvent.OutputObject
    >;
    FirstArtistSelected: TypedContractEvent<
      FirstArtistSelectedEvent.InputTuple,
      FirstArtistSelectedEvent.OutputTuple,
      FirstArtistSelectedEvent.OutputObject
    >;
  };
}
