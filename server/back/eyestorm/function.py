import pandas as pd
import numpy as np

class process():

    @staticmethod
    def import_file(file_path:str,sep:str,null_value:str=''):
        #read table
        table = pd.read_csv(sep=sep,filepath_or_buffer=file_path, \
                            na_values=null_value,names=['x','y','z'],\
                            dtype={'x':np.float128,'y':np.float128,'z':np.float128})
        return table

    @staticmethod
    def max_min(data):
       return  data.max(axis=0), data.min(axis=0)



    @staticmethod
    def slice_dataframe_input(data):

        def slice_dataframe_manual(data):
            confirm = None

            while confirm not in ('s','sim'):
                nome_arquivo = '' 
                table = data
                for coluna in ('x','y','z'):
                    inicio = input(f'Para {coluna}, inicio: ')
                    fim = input(f'Para {coluna}, fim: ')
                    if inicio != '':
                        nome_arquivo += f'{coluna}_{inicio}_{fim}'
                        table = table[table[coluna].between(np.float128(inicio),np.float128(fim))]
                table.to_csv(path_or_buf=nome_arquivo,sep=',',index=False,header=False)
                confirm = input('Sair? (s,sim)')
            return


        def slice_dataframe_automatico(data):
            orientacao_corte:str = input("Direção do corte (x,y,x)")
            tamanho_corte = np.float128(input("Tamanho do corte ?: "))
            low_bound = min_point[orientacao_corte]
            overlap = tamanho_corte/2
            high_bound = low_bound + tamanho_corte
            iterator = 0 
            #Cortes sempre do mesmo tamanho, mesmo que deixe sobra
            while high_bound <= max_point[orientacao_corte] :
                table = data[data[orientacao_corte].between(low_bound,high_bound)]
                table.to_csv(path_or_buf=f'Slice {iterator}',sep=',',index=False,header=False)
                low_bound = high_bound - overlap 
                high_bound = low_bound + tamanho_corte
                iterator += 1

            return


        tipo_slice = None
        while tipo_slice not in ('A','a','B','b'):
            tipo_slice = input(' Que tipo de slice você necessita ? \n (a) Manual \n (b) Automático (Constante) :  ')
        
        max_point = data.max(axis=0)
        min_point = data.min(axis=0)
        print(f'min: {min_point}')
        print(f'max: {max_point}')

        if tipo_slice == 'a':
            slice_dataframe_manual(data)

        if tipo_slice == 'b':
            slice_dataframe_automatico(data)
    
    @staticmethod
    def run(path,separator,null_value):
        dado = process.import_file(path,separator,null_value)
        
