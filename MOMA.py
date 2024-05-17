import pandas as pd
import cobra
import pickle
import copy

with open('mutant1.pickle', 'rb') as f:
    model=pickle.load(f)

with open('SC730_20_90_Streptomyces_coelicolor_specific_model.pickle', 'rb') as f:
    specific_model=pickle.load(f)

#specific_model=copy.deepcopy(riptides['C730_20-90'].model)
WT_solution=cobra.flux_analysis.pfba(specific_model).fluxes

reference_fluxes=model.optimize()

for i in reference_fluxes.fluxes.keys():
    if i in WT_solution.keys():
        reference_fluxes.fluxes[i]=WT_solution[i]
    else:
        reference_fluxes.fluxes[i]=0
    

MOMA=pd.DataFrame(index=[r.id for r in specific_model.reactions], columns=['WT Monensin','Del Monensin'])
Total=len(specific_model.reactions)
Count=1
for r in specific_model.reactions:
    mut=copy.deepcopy(model)
    mut.reactions.get_by_id(r.id).lower_bound=0
    mut.reactions.get_by_id(r.id).upper_bound=0
    moma=cobra.flux_analysis.moma(mut,reference_fluxes, linear=True)
    MOMA.loc[r.id,:]=[reference_fluxes['EX_MonensinA_e0'], moma['EX_MonensinA_e0']]
    print(r.id+"\t"+str(Count)+"/"+str(Total))
    Count+=1

MOMA.to_csv('MOMA.txt', sep='\t')