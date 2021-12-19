import { ERC20__factory } from "@3rdweb/contracts";
import { AddressZero } from "@ethersproject/constants";
import { formatUnits } from "@ethersproject/units";
import { BigNumberish } from "ethers";
import { ProviderOrSigner } from "../core/types";

/**
 * Currency metadata.
 * @public
 */
export interface Currency {
  name: string;
  symbol: string;
  decimals: number;
}

/**
 * Currency metadata & value.
 * @public
 */
export interface CurrencyValue extends Currency {
  value: string;
  displayValue: string;
}

/**
 * @internal
 */
export const NATIVE_TOKEN_ADDRESS =
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

/**
 * @internal
 */
export async function getCurrencyMetadata(
  providerOrSigner: ProviderOrSigner,
  asset: string,
): Promise<Currency> {
  try {
    if (isNativeToken(asset)) {
      return {
        name: "",
        symbol: "",
        decimals: 18,
      };
    } else {
      const erc20 = ERC20__factory.connect(asset, providerOrSigner);
      const [name, symbol, decimals] = await Promise.all([
        erc20.name(),
        erc20.symbol(),
        erc20.decimals(),
      ]);
      return {
        name,
        symbol,
        decimals,
      };
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return {
    name: "",
    symbol: "",
    decimals: 0,
  };
}

/**
 * @internal
 */
export async function getCurrencyValue(
  providerOrSigner: ProviderOrSigner,
  asset: string,
  price: BigNumberish,
): Promise<CurrencyValue> {
  const metadata = await getCurrencyMetadata(providerOrSigner, asset);
  return {
    ...metadata,
    value: price.toString(),
    displayValue: formatUnits(price, metadata.decimals),
  };
}

/**
 * @internal
 */
export function isNativeToken(tokenAddress: string): boolean {
  return (
    tokenAddress.toLowerCase() === NATIVE_TOKEN_ADDRESS ||
    tokenAddress.toLowerCase() === AddressZero
  );
}
