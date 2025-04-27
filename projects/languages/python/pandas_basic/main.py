# Importamos pandas
import pandas as pd
import numpy as np

import modules.import_data as import_data


def clean_df(df: pd.DataFrame) -> None:
    # Copiamos el dataframe original
    df = df.copy()

    # Reemplazamos valores ? por NaN
    df = df.replace("?", np.nan)
    print(f"\n df.replace(): \n\n {df}")

    # Eliminamos las filas con valores nulos
    # axis=0: Eliminar las filas
    # axis=1: Eliminar las columnas
    # inplace=True: Modificamos el dataframe original
    df.dropna(subset=["price"], axis=0, inplace=True)
    print(f"\n df.dropna(): \n\n {df}")


def format_df(df: pd.DataFrame) -> None:
    # Copiamos el dataframe original
    df = df.copy()

    # Modificamos el tipo de datos de la columna price
    df["price"] = df["price"].astype(float)

    # Modificamos valores de la columna price
    df["price"] = df["price"].apply(lambda x: x * 2)

    # Cambiamos el nombre de una columna
    df.rename(columns={"price": "price * 2"}, inplace=True)


def show_df(df: pd.DataFrame) -> None:
    # Imprimimos las primeras 20 filas
    print(f"\n df.head(20): \n\n {df.head(20)}")

    # Imprimimos las últimas 10 filas
    print(f"\n df.tail(10): \n\n {df.tail(10)}")

    # Imprimimos el tipo de datos de cada columna
    print(f"\n df.dtypes: \n\n {df.dtypes}")

    # Imprimimos el resumen estadístico de cada columna
    print(f"\n df.describe(): \n\n {df.describe()}")

    # Imprimimos el número de filas y columnas
    # shape: Devuelve una tupla con el número de filas y columnas
    print(f"\n df.shape: \n\n Filas: {df.shape[0]} Columnas: {df.shape[1]}")


if __name__ == "__main__":
    df_original: pd.DataFrame = import_data.data_csv()
    show_df(df_original)
    pass
