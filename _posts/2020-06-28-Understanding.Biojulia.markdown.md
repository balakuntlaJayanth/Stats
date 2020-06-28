---
layout: post
title:  "Understanding Biojulia"
date:   2020-06-28 22:02:38 +0530
categories: jekyll update
---

## Understanding Biojulia

Biojulia is an open source bioinformatics library in Julia. This blog mainly aims to understand some basic functionality provided by the julia for manipulating common file formats used in the bioinformatics.

The case studys we have choosen include :

- Reading and writing fasta sequence
- Reading and manipulating vcf files




```julia

using DataFrames
using Bio.Seq
using Bio.Var
```

    ┌ Info: Precompiling DataFrames [a93c6f00-e57d-5684-b7b6-d8193f3e46c0]
    └ @ Base loading.jl:1242
    ┌ Info: Precompiling Bio [3637df68-df41-5d16-b00c-95ac8c2142c5]
    └ @ Base loading.jl:1242
    [ Info: Compiling VCF parser...


### Reading and writing fasta sequences

```julia
df = DataFrame(A = 1:4, B = ["M", "F", "F", "M"])
df
```




<table><thead><tr><th></th><th>A</th><th>B</th></tr><tr><th></th><th>Int64</th><th>String</th></tr></thead><tbody><p>4 rows × 2 columns</p><tr><th>1</th><td>1</td><td>M</td></tr><tr><th>2</th><td>2</td><td>F</td></tr><tr><th>3</th><td>3</td><td>F</td></tr><tr><th>4</th><td>4</td><td>M</td></tr></tbody></table>




```julia
seq = dna"ACAGCGTAGCT"
writer = open(FASTA.Writer, "out.fa")
```

```julia
writer = open(FASTA.Writer, "out.fa")
```



    BioSequences.FASTA.Writer(IOStream(<file out.fa>), 70)
        


### Manipulating VCF.


```julia
reader = open(VCF.Reader, "https://github.com/vcflib/vcflib/blob/master/samples/sample.vcf")
header(reader)
i=0
for record in reader
    print(record)
    i+=1
    if i>10
        break
    end
end
```

    GeneticVariation.VCF.Record:
       chromosome: 19
         position: 111
       identifier: <missing>
        reference: A
        alternate: C
          quality: 9.6
           filter: <missing>
      information: <missing>
           format: GT HQ
         genotype: [1] 0|0 10,10 [2] 0|0 10,10 [3] 0/1 3,3GeneticVariation.VCF.Record:
       chromosome: 19
         position: 112
       identifier: <missing>
        reference: A
        alternate: G
          quality: 10.0
           filter: <missing>
      information: <missing>
           format: GT HQ
         genotype: [1] 0|0 10,10 [2] 0|0 10,10 [3] 0/1 3,3GeneticVariation.VCF.Record:
       chromosome: 20
         position: 14370
       identifier: rs6054257
        reference: G
        alternate: A
          quality: 29.0
           filter: PASS
      information: NS=3 DP=14 AF=0.5 DB H2 
           format: GT GQ DP HQ
         genotype: [1] 0|0 48 1 51,51 [2] 1|0 48 8 51,51 [3] 1/1 43 5 .,.GeneticVariation.VCF.Record:
       chromosome: 20
         position: 17330
       identifier: <missing>
        reference: T
        alternate: A
          quality: 3.0
           filter: q10
      information: NS=3 DP=11 AF=0.017 
           format: GT GQ DP HQ
         genotype: [1] 0|0 49 3 58,50 [2] 0|1 3 5 65,3 [3] 0/0 41 3 .,.GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1110696
       identifier: rs6040355
        reference: A
        alternate: G T
          quality: 67.0
           filter: PASS
      information: NS=2 DP=10 AF=0.333,0.667 AA=T DB 
           format: GT GQ DP HQ
         genotype: [1] 1|2 21 6 23,27 [2] 2|1 2 0 18,2 [3] 2/2 35 4 .,.GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1230237
       identifier: <missing>
        reference: T
        alternate: <missing>
          quality: 47.0
           filter: PASS
      information: NS=3 DP=13 AA=T 
           format: GT GQ DP HQ
         genotype: [1] 0|0 54 . 56,60 [2] 0|0 48 4 51,51 [3] 0/0 61 2 .,.GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1234567
       identifier: microsat1
        reference: G
        alternate: GA GAC
          quality: 50.0
           filter: PASS
      information: NS=3 DP=9 AA=G AN=6 AC=3,1 
           format: GT GQ DP
         genotype: [1] 0/1 . 4 [2] 0/2 17 2 [3] 1/1 40 3GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1235237
       identifier: <missing>
        reference: T
        alternate: <missing>
          quality: <missing>
           filter: <missing>
      information: <missing>
           format: GT
         genotype: [1] 0/0 [2] 0|0 [3] ./.GeneticVariation.VCF.Record:
       chromosome: X
         position: 10
       identifier: rsTest
        reference: AC
        alternate: A ATG
          quality: 10.0
           filter: PASS
      information: <missing>
           format: GT
         genotype: [1] 0 [2] 0/1 [3] 0|2


```julia
function vcf_to_dataframe(vcf_file)
    
    reader = open(VCF.Reader, vcf_file)
    df = DataFrame()
    i=0
    for record in reader
        println(record)
        i+=1
        if i>10
            break
        end
    end
    return df
end

vcf_to_dataframe("calls.vcf")
```

    GeneticVariation.VCF.Record:
       chromosome: 19
         position: 111
       identifier: <missing>
        reference: A
        alternate: C
          quality: 9.6
           filter: <missing>
      information: <missing>
           format: GT HQ
         genotype: [1] 0|0 10,10 [2] 0|0 10,10 [3] 0/1 3,3
    GeneticVariation.VCF.Record:
       chromosome: 19
         position: 112
       identifier: <missing>
        reference: A
        alternate: G
          quality: 10.0
           filter: <missing>
      information: <missing>
           format: GT HQ
         genotype: [1] 0|0 10,10 [2] 0|0 10,10 [3] 0/1 3,3
    GeneticVariation.VCF.Record:
       chromosome: 20
         position: 14370
       identifier: rs6054257
        reference: G
        alternate: A
          quality: 29.0
           filter: PASS
      information: NS=3 DP=14 AF=0.5 DB H2 
           format: GT GQ DP HQ
         genotype: [1] 0|0 48 1 51,51 [2] 1|0 48 8 51,51 [3] 1/1 43 5 .,.
    GeneticVariation.VCF.Record:
       chromosome: 20
         position: 17330
       identifier: <missing>
        reference: T
        alternate: A
          quality: 3.0
           filter: q10
      information: NS=3 DP=11 AF=0.017 
           format: GT GQ DP HQ
         genotype: [1] 0|0 49 3 58,50 [2] 0|1 3 5 65,3 [3] 0/0 41 3 .,.
    GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1110696
       identifier: rs6040355
        reference: A
        alternate: G T
          quality: 67.0
           filter: PASS
      information: NS=2 DP=10 AF=0.333,0.667 AA=T DB 
           format: GT GQ DP HQ
         genotype: [1] 1|2 21 6 23,27 [2] 2|1 2 0 18,2 [3] 2/2 35 4 .,.
    GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1230237
       identifier: <missing>
        reference: T
        alternate: <missing>
          quality: 47.0
           filter: PASS
      information: NS=3 DP=13 AA=T 
           format: GT GQ DP HQ
         genotype: [1] 0|0 54 . 56,60 [2] 0|0 48 4 51,51 [3] 0/0 61 2 .,.
    GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1234567
       identifier: microsat1
        reference: G
        alternate: GA GAC
          quality: 50.0
           filter: PASS
      information: NS=3 DP=9 AA=G AN=6 AC=3,1 
           format: GT GQ DP
         genotype: [1] 0/1 . 4 [2] 0/2 17 2 [3] 1/1 40 3
    GeneticVariation.VCF.Record:
       chromosome: 20
         position: 1235237
       identifier: <missing>
        reference: T
        alternate: <missing>
          quality: <missing>
           filter: <missing>
      information: <missing>
           format: GT
         genotype: [1] 0/0 [2] 0|0 [3] ./.
    GeneticVariation.VCF.Record:
       chromosome: X
         position: 10
       identifier: rsTest
        reference: AC
        alternate: A ATG
          quality: 10.0
           filter: PASS
      information: <missing>
           format: GT
         genotype: [1] 0 [2] 0/1 [3] 0|2




### Conclusion

Biojulia offers interesting functionality to manipulate fasta sequences
and VCF files.








### References

- https://biojulia.net/Bio.jl/stable/man/seq/#Biological-symbols-1
