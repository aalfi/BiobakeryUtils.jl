var documenterSearchIndex = {"docs":
[{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"CurrentModule = BiobakeryUtils","category":"page"},{"location":"gettingstarted/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"This is a package for the julia programming language, designed for working with the bioBakery family of tools for metagenomic analysis of microbial communities. Currently, we support MetaPhlAn and HUMAnN.","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Read on to learn how to install the package and use it to begin using it to uncover insights about your microbial community data! If you run into problems, you can open an issue on this repository, or start a discussion over on Microbiome.jl.","category":"page"},{"location":"gettingstarted/#Installing-julia","page":"Getting Started","title":"Installing julia","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If this is your first time using julia, you'll need to install it by going to the julia downloads page and following the instructions for your platform. BiobakeryUtils.jl should work on any julia version >= 1.6.0.","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Alternatively, you can you jill.py, which is an easy-to-use python utility for installing julia.","category":"page"},{"location":"gettingstarted/#Launching-julia-from-the-terminal","page":"Getting Started","title":"Launching julia from the terminal","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If you download the \"app\" versions of julia from the downloads page above, you may also want to add julia to your shell's $PATH so that you can launch it from your terminal. For windows users, you can look look here for instructions. Mac users, see here for instructions.","category":"page"},{"location":"gettingstarted/#Making-a-project","page":"Getting Started","title":"Making a project","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"In julia, it's typically a good idea to use \"projects\" to organize your package dependencies (this is similar to \"environments\" that conda uses).","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"To do this, make a directory and \"activate\" it in the julia Pkg REPL.","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"$ mkdir my_project\n\n$ cd my_project\n\n$ julia\n\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.6.1 (2021-04-23)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> # press ] to enter the Pkg REPL\n\n(@v1.6) pkg> activate .\n  Activating new environment at `~/my_project/Project.toml`\n\n(my_project) pkg> # press backspace to get back to julia REPL\n\njulia>","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"(Image: asciicast)","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"So far, this is still just an empty directory, but you can also use the Pkg REPL to install packages, like BiobakeryUtils.jl.","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"(my_project) pkg> add BiobakeryUtils","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"(Image: asciicast)","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Once this process completes, the directory will now contain a Project.toml file that contains BiobakeryUtils.jl as a dependency, and a Manifest.toml file that contains all of the exact info about dependencies installed for this environment.","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"In the future, you can launch julia with the environment already activated using julia --project if your working directory is my_project, or julia --project=~/my_project if you're in a different working directory.","category":"page"},{"location":"gettingstarted/#Using-bioBakery-command-line-tools","page":"Getting Started","title":"Using bioBakery command line tools","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Some functions provided by this package (eg humann_regroup and humann_rename), require the appropriate bioBakery tools to be installed and accessible from the julia shell environment. The easiest way to do this is to use Conda.jl, though other installation methods are possible as well.","category":"page"},{"location":"gettingstarted/#Using-a-previous-installation","page":"Getting Started","title":"Using a previous installation","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If you have a previous installation of metaphlan and/or humann, you can tell julia to use them by modifying the $PATH environment variable.","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Environment variables in julia are stored in a Dict called ENV. For example, the $PATH variable in Unix tells the shell where to look for executable programs, and is available in julia using ENV[\"PATH\"]","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"ENV[\"PATH\"]","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If you launch julia from the shell, this variable is automatically populated with the same $PATH, so if you can access humann or metaphlan from your shell, then launch julia, you should be all set (eg, if you've installed them with miniconda, and you do conda activate envname, then launch julia from the same shell, they should already be available).","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If not, you need to identify where humann or metaphlan executables are located, then add that location to ENV[\"PATH\"] (delimeted by :). For example, if the humann executable is found at /home/kevin/.local/bin, you would run:","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"ENV[\"PATH\"] = ENV[\"PATH\"] * \":\" * \"/home/kevin/.local/bin\"","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If you don't know where your installation is located, from the terminal, you can use the which command:","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"$ which humann\n/home/kevin/.local/bin/humann","category":"page"},{"location":"gettingstarted/#Using-Conda.jl","page":"Getting Started","title":"Using Conda.jl","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"If you don't have a previous installation, you can use Conda.jl to install the necessary tools. To do this, first install Conda.jl in your environment using the Pkg REPL (accessible by typing ] in the julia REPL - press <backspace> to get back to the regular REPL).","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"$ cd my_project/\n\n$ julia --project\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.6.1 (2021-04-23)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> # press ']'\n\n(my_project) pkg> add Conda\n    Updating registry at `~/.julia/registries/General`\n   Resolving package versions...\n    Updating `~/.julia/dev/BiobakeryUtils/my_project/Project.toml`\n  [8f4d0f93] + Conda v1.5.2\n    Updating `~/.julia/dev/BiobakeryUtils/my_project/Manifest.toml`\n  [8f4d0f93] + Conda v1.5.2\n  [682c06a0] + JSON v0.21.2\n  [69de0a69] + Parsers v2.0.4\n  [81def892] + VersionParsing v1.2.0\n  [ade2ca70] + Dates\n  [a63ad114] + Mmap\n  [de0858da] + Printf\n  [4ec0a83e] + Unicode\n\njulia> using Conda\n\njulia> Conda.add(\"humann\", :biobakery; channel=\"bioconda\")\n[ Info: Running conda install -y -c bioconda humann in biobakery environment\nCollecting package metadata (current_repodata.json): done\nSolving environment: done\n# ...\n\n","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"By default, Conda.jl puts environments into ~/.julia/conda/envs/<env name>, so in this case, you'd next want to run","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"ENV[\"PATH\"] = ENV[\"PATH\"] * \":\" * expanduser(\"~/.julia/conda/envs/biobakery/bin\")","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"(Image: asciicast)","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"The BioJulia organisation has a set of contribution guidelines which apply to all BioJulia projects. These guidelines are available here and it is recommended all new contributors read these guidelines before opening a pull request.","category":"page"},{"location":"contributing/#Making-a-contribution","page":"Contributing","title":"Making a contribution","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If you're interested in adding functionality to BiobakeryUtils.jl, please feel free to open an issue or a pull request (PR) against the main branch. If you're not yet ready for that, you can also ask questions/start a discussion in the #biology channel on slack or zulip, or using the biology domain on discourse.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Work-in-progress PRs are fine, as discussion about approach and code review can happen in the PR.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Before merging, any new code should be unit tested and have docs for newly exported functions, but if you don't know how to do this, don't worry, we can help!","category":"page"},{"location":"general/#General","page":"General Utilities","title":"General","text":"","category":"section"},{"location":"general/","page":"General Utilities","title":"General Utilities","text":"Modules = [BiobakeryUtils]\nPages = [\"general.jl\"]","category":"page"},{"location":"general/#BiobakeryUtils.permanova","page":"General Utilities","title":"BiobakeryUtils.permanova","text":"permanova(dm::Array{<:Real,2}, metadata::AbstractVector, nperm::Int=999;\n            label=nothing, datafilter=x->true)\npermanova(dm::Array{<:Real,2}, metadata::AbstractTable, nperm=999;\n            fields=names(metadata), kwargs...)\n\nPerforms PERMANOVA analysis from R's vegan package using the adonis function.\n\nPositional arguments:\n\ndm: a symetric distance matrix.\nmetadata: either a vector of numerical or categorical data to test against, or a Table with columns for each variable to test against. Any missing data in the vector or rows of the Table with missing data will be filtered out.\nnperm=999: number of permutations for PERMANOVA.\n\nKeyword Arguments:\n\ndatafilter=x-> true: a function to filter elements (or rows) of metadata. Removal of missing values occurs before this function is applied.\nlabel=nothing: If provided, adds a column label to the results filled with this value. Useful if performing multiple runs that will be combined in a single Table.\nfields: if passing a Table as metadata, an array of symbols may be passed to select only certain columns and/or determine their order for the resulting PERMANOVA.\n\nNote: this will throw an error if vegan is not installed. To install:\n\nusing RCall\n\nreval(\"install.packages('vegan')\")\n\n\n\n\n\n","category":"function"},{"location":"humann/#HUMAnN-Tutorial-with-BiobakeryUtils.jl","page":"Working with HUMAnN","title":"HUMAnN Tutorial with BiobakeryUtils.jl","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"🗒️ This tutorial is meant to be run in parallel with / mirror the official HUMAnN v3 tutorial\n❓️ If you have questions about MetaPhlAn itself, please direct them to the bioBakery help forum\n🤔 If you have questions about using the MetaPhlAn tools in julia, please open an issue, or start a discussion over on Microbiome.jl!\n📔 For a function / type reference, jump to the bottom","category":"page"},{"location":"humann/#Getting-started","page":"Working with HUMAnN","title":"Getting started","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"Installation of julia\nInstallation of humann with Conda\nUsing an existing humann installation","category":"page"},{"location":"humann/#Running-HUMAnN","page":"Working with HUMAnN","title":"Running HUMAnN","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#2-metagenome-functional-profiling\nFor now, run command with run(cmd)","category":"page"},{"location":"humann/#Default-outputs","page":"Working with HUMAnN","title":"Default outputs","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#23-humann-default-outputs\nload gene families file with humann_profile\nlook at contents\nfilter on stratified, unstratified","category":"page"},{"location":"humann/#Manipulating-tables","page":"Working with HUMAnN","title":"Manipulating tables","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#3-manipulating-humann-output-tables\nDo all of this in CommProfile","category":"page"},{"location":"humann/#Normalize-RPK-to-relative-abundance","page":"Working with HUMAnN","title":"Normalize RPK to relative abundance","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#31-normalizing-rpks-to-relative-abundance","category":"page"},{"location":"humann/#Regrouping-genes-to-other-functional-categories","page":"Working with HUMAnN","title":"Regrouping genes to other functional categories","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#32-regrouping-genes-to-other-functional-categories\nuse humann_regroup","category":"page"},{"location":"humann/#Attaching-names-to-features","page":"Working with HUMAnN","title":"Attaching names to features","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#33-attaching-names-to-features\nuse humann_rename","category":"page"},{"location":"humann/#HUMAnN-for-multiple-samples","page":"Working with HUMAnN","title":"HUMAnN for multiple samples","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#42-humann-for-multiple-samples","category":"page"},{"location":"humann/#Plotting","page":"Working with HUMAnN","title":"Plotting","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"https://github.com/biobakery/biobakery/wiki/humann3#5-plotting-stratified-functions\nKevin should do this","category":"page"},{"location":"humann/#Functions-and-types","page":"Working with HUMAnN","title":"Functions and types","text":"","category":"section"},{"location":"humann/","page":"Working with HUMAnN","title":"Working with HUMAnN","text":"Modules = [BiobakeryUtils]\nPages = [\"humann.jl\"]","category":"page"},{"location":"humann/#BiobakeryUtils.humann_profile-Tuple{AbstractString}","page":"Working with HUMAnN","title":"BiobakeryUtils.humann_profile","text":"Stratified import currently non-functional\n\n\n\n\n\n","category":"method"},{"location":"humann/#BiobakeryUtils.humann_profiles-Tuple{AbstractString}","page":"Working with HUMAnN","title":"BiobakeryUtils.humann_profiles","text":"Stratified import currently non-functional\n\n\n\n\n\n","category":"method"},{"location":"#BiobakeryUtils","page":"BiobakeryUtils","title":"BiobakeryUtils","text":"","category":"section"},{"location":"#Contents","page":"BiobakeryUtils","title":"Contents","text":"","category":"section"},{"location":"","page":"BiobakeryUtils","title":"BiobakeryUtils","text":"Pages = [\"general.md\", \"conda.md\", \"metaphlan.md\", \"humann.md\"]\nDepth = 6","category":"page"},{"location":"metaphlan/#MetaPhlAn-Tutorial-with-BiobakeryUtils.jl","page":"Working with MetaPhlAn","title":"MetaPhlAn Tutorial with BiobakeryUtils.jl","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"🗒️ This tutorial is meant to be run in parallel with / mirror the official MetaPhlAn v3 tutorial\n❓️ If you have questions about MetaPhlAn itself, please direct them to the bioBakery help forum\n🤔 If you have questions about using the MetaPhlAn tools in julia, please open an issue, or start a discussion over on Microbiome.jl!\n📔 For a function / type reference, jump to the bottom","category":"page"},{"location":"metaphlan/#Getting-started","page":"Working with MetaPhlAn","title":"Getting started","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"Installation of julia\nInstallation of metaphlan with Conda\nUsing an existing metaphlan installation","category":"page"},{"location":"metaphlan/#Input-files","page":"Working with MetaPhlAn","title":"Input files","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#input-files","category":"page"},{"location":"metaphlan/#Run-a-single-sample","page":"Working with MetaPhlAn","title":"Run a single sample","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#run-a-single-sample\nfor now, use run(cmd)","category":"page"},{"location":"metaphlan/#Output-files","page":"Working with MetaPhlAn","title":"Output files","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#output-files\nload output with metaphlan_profile\ninvestigate with various functions (try to show similar things as tutorial)","category":"page"},{"location":"metaphlan/#Run-on-multiple-cores","page":"Working with MetaPhlAn","title":"Run on multiple cores","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#run-on-multiple-cores","category":"page"},{"location":"metaphlan/#Run-multiple-samples","page":"Working with MetaPhlAn","title":"Run multiple samples","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#run-multiple-samples","category":"page"},{"location":"metaphlan/#Merge-outputs","page":"Working with MetaPhlAn","title":"Merge outputs","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#merge-outputs\nuse metaphlan_profile in loop and then commjoin\nuse metaphlan_profiles","category":"page"},{"location":"metaphlan/#Visualize-results","page":"Working with MetaPhlAn","title":"Visualize results","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"https://github.com/biobakery/biobakery/wiki/metaphlan3#visualize-results\nKevin should probably handle this part","category":"page"},{"location":"metaphlan/#Functions-and-Types","page":"Working with MetaPhlAn","title":"Functions and Types","text":"","category":"section"},{"location":"metaphlan/","page":"Working with MetaPhlAn","title":"Working with MetaPhlAn","text":"Modules = [BiobakeryUtils]\nPages = [\"metaphlan.jl\"]","category":"page"},{"location":"metaphlan/#BiobakeryUtils.metaphlan_profile","page":"Working with MetaPhlAn","title":"BiobakeryUtils.metaphlan_profile","text":"metaphlan_profile(path::AbstractString, level::Union{Int, Symbol}=:all; sample::AbstractString=basename(first(splitext(path))))\n\nCompiles a MetaPhlAn file into a CommunityProfile. Can select data according to taxonomic level. If level not given, all data is compiled. Sample name of the CommunityProfile can be specified by passing a sample argument. If name not given, the name of the file becomes the Sample name.\n\nLevels may be given either as numbers or symbols:\n\n1 = :kingdom\n2 = :phylum\n3 = :class\n4 = :order\n5 = :family\n6 = :genus\n7 = :species\n8 = :subspecies\n\n\nExamples\n≡≡≡≡≡≡≡≡≡≡\njulia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 96 features in 1 samples\n\nFeature names:\nBacteria, Archaea, Firmicutes...Ruminococcus_bromii, Bacteroides_vulgatus\n\nSample names:\nmetaphlan_single2\n\n\n\njulia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\", 4)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 11 features in 1 samples\n\nFeature names:\nClostridiales, Bacteroidales, Coriobacteriales...Firmicutes_unclassified, Pasteurellales\n\nSample names:\nmetaphlan_single2\n\n\n\njulia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\", :genus)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 40 features in 1 samples\n\nFeature names:\nPrevotella, Roseburia, Faecalibacterium...Haemophilus, Lactococcus\n\nSample names:\nmetaphlan_single2\n\n\n\njulia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\", :genus, sample = \"sample2\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 40 features in 1 samples\n\nFeature names:\nPrevotella, Roseburia, Faecalibacterium...Haemophilus, Lactococcus\n\nSample names:\nsample2\n\n\n\n\n\n","category":"function"},{"location":"metaphlan/#BiobakeryUtils.metaphlan_profiles","page":"Working with MetaPhlAn","title":"BiobakeryUtils.metaphlan_profiles","text":"metaphlan_profiles(paths::Array{<:AbstractString, 1}, level::Union{Int, Symbol}=:all)\n\nCompiles MetaPhlAn profiles from multiple single tables into a CommunityProfile.\n\nExamples ≡≡≡≡≡≡≡≡≡≡\n\njulia> metaphlan_profiles([\"test/files/metaphlan_single1.tsv\", \"test/files/metaphlan_single2.tsv\"])\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 129 features in 2 samples\n\nFeature names:\nBacteria, Firmicutes, Bacteroidetes...Coprococcus_eutactus, Ruminococcus_bromii\n\nSample names:\nmetaphlan_single1, metaphlan_single2\n\n\n\njulia> metaphlan_profiles([\"test/files/metaphlan_single1.tsv\", \"test/files/metaphlan_single2.tsv\"], :genus)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 46 features in 2 samples\n\nFeature names:\nBacteroides, Roseburia, Faecalibacterium...Ruthenibacterium, Haemophilus\n\nSample names:\nmetaphlan_single1, metaphlan_single2\n\n\n\njulia> metaphlan_profiles([\"test/files/metaphlan_single1.tsv\", \"test/files/metaphlan_single2.tsv\"], 5)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 24 features in 2 samples\n\nFeature names:\nLachnospiraceae, Ruminococcaceae, Bacteroidaceae...Clostridiales_unclassified, Pasteurellaceae\n\nSample names:\nmetaphlan_single1, metaphlan_single2\n\n\n\n\n\n","category":"function"},{"location":"metaphlan/#BiobakeryUtils.metaphlan_profiles-2","page":"Working with MetaPhlAn","title":"BiobakeryUtils.metaphlan_profiles","text":"metaphlan_profiles(path::AbstractString, level::Union{Int, Symbol}=:all; keepunidentified=false)\n\nCompiles MetaPhlAn profiles from a merged table into a CommunityProfile. Can select data according to taxonomic level. If level not given, all data is compiled. Set keepunidentified flag to true to keep UNIDENTIFIED data.\n\nLevels may be given either as numbers or symbols:\n\n1 = :kingdom\n2 = :phylum\n3 = :class\n4 = :order\n5 = :family\n6 = :genus\n7 = :species\n8 = :subspecies\n\n\nExamples\n≡≡≡≡≡≡≡≡≡≡\njulia> metaphlan_profiles(\"test/files/metaphlan_multi_test.tsv\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 42 features in 7 samples\n\nFeature names:\nArchaea, Euryarchaeota, Methanobacteria...Actinomyces_viscosus, GCF_000175315\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\n\njulia> metaphlan_profiles(\"test/files/metaphlan_multi_test.tsv\", :genus)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 3 features in 7 samples\n\nFeature names:\nMethanobrevibacter, Methanosphaera, Actinomyces\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\n\njulia> metaphlan_profiles(\"test/files/metaphlan_multi_test.tsv\", 3)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 2 features in 7 samples\n\nFeature names:\nMethanobacteria, Actinobacteria\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\njulia> metaphlan_profiles(\"test/files/metaphlan_multi_test_unidentified.tsv\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 43 features in 7 samples\n\nFeature names:\nUNIDENTIFIED, Archaea, Euryarchaeota...Actinomyces_viscosus, GCF_000175315\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\n\n# julia> metaphlan_profiles(\"test/files/metaphlan_multi_test_unidentified.tsv\", keepunidentified = true)\n# CommunityProfile{Float64, Taxon, MicrobiomeSample} with 43 features in 7 samples\n\n# Feature names:\n# UNIDENTIFIED, Archaea, Euryarchaeota...Actinomyces_viscosus, GCF_000175315\n\n# Sample names:\n# sample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\n\n\n\n","category":"function"},{"location":"metaphlan/#BiobakeryUtils.parsetaxa-Tuple{AbstractString}","page":"Working with MetaPhlAn","title":"BiobakeryUtils.parsetaxa","text":"parsetaxa(taxstring::AbstractString; throw_error=true)\n\nGiven a string representing taxonmic levels as formatted by MetaPhlAn (eg \"kBacteria|pProteobacteria...\"), separates taxonomic levels into elements of type Taxon in a vector.\n\nExamples ≡≡≡≡≡≡≡≡≡≡\n\njulia> parsetaxa(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\"; throw_error = true)\n3-element Vector{Taxon}:\n Taxon(\"Archaea\", :kingdom)\n Taxon(\"Euryarchaeota\", :phylum)\n Taxon(\"Methanobacteria\", :class)\n\n\n\n\n\n","category":"method"},{"location":"metaphlan/#BiobakeryUtils.parsetaxon-Tuple{AbstractString}","page":"Working with MetaPhlAn","title":"BiobakeryUtils.parsetaxon","text":"parsetaxon(taxstring::AbstractString, taxlevel::Union{Int, Symbol})\n\nFinds given taxonomic level in a string (as formatted by MetaPhlAn (eg \"kBacteria|pProteobacteria...\")) and returns the clade and taxonomic level as a Taxon. If taxon level not given, function will return the most specific (lowest) taxonomic level available.\n\nLevels may be given either as numbers or symbols:\n\n1 = :kingdom\n2 = :phylum\n3 = :class\n4 = :order\n5 = :family\n6 = :genus\n7 = :species\n8 = :subspecies\n\nExamples ≡≡≡≡≡≡≡≡≡≡\n\njulia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\", 2)\nTaxon(\"Euryarchaeota\", :phylum)\n\njulia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\", :kingdom)\nTaxon(\"Archaea\", :kingdom)\n\njulia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\")\nTaxon(\"Methanobacteria\", :class)\n\n\n\n\n\n","category":"method"},{"location":"tutorial/#Welcome-to-the-BiobakeryUtils-tutorial","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"","category":"section"},{"location":"tutorial/#Using-BiobakeryUtils-with-[MetaPhlAn](https://github.com/biobakery/MetaPhlAn/wiki/MetaPhlAn-3.0)-files","page":"Welcome to the BiobakeryUtils tutorial","title":"Using BiobakeryUtils with MetaPhlAn files","text":"","category":"section"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"Note: BiobakeryUtils currently only works with MetaPhlAn 3.0.","category":"page"},{"location":"tutorial/#Input-file-format","page":"Welcome to the BiobakeryUtils tutorial","title":"Input file format","text":"","category":"section"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"BiobakeryUtils accepts .tsv files outputted from MetaPhlAn. Files can either contain a merged table or one or multiple single table(s). Example files that are used in this tutorial can be found in BiobakeryUtils.jl/test/files/.","category":"page"},{"location":"tutorial/#Creating-CommunityProfiles","page":"Welcome to the BiobakeryUtils tutorial","title":"Creating CommunityProfiles","text":"","category":"section"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"A CommunityProfile can be created from MetaPhlAn file(s) using metaphlan_profile and metaphlan_profiles.","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"From one file with a single table:","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 96 features in 1 samples\n\nFeature names:\nBacteria, Archaea, Firmicutes...Ruminococcus_bromii, Bacteroides_vulgatus\n\nSample names:\nmetaphlan_single2","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"From one file with a merged table:","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> metaphlan_profiles(\"test/files/metaphlan_multi_test.tsv\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 42 features in 7 samples\n\nFeature names:\nArchaea, Euryarchaeota, Methanobacteria...Actinomyces_viscosus, GCF_000175315\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"From multiple files with single tables:","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> metaphlan_profiles([\"test/files/metaphlan_single1.tsv\", \"test/files/metaphlan_single2.tsv\"])\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 129 features in 2 samples\n\nFeature names:\nBacteria, Firmicutes, Bacteroidetes...Coprococcus_eutactus, Ruminococcus_bromii\n\nSample names:\nmetaphlan_single1, metaphlan_single2","category":"page"},{"location":"tutorial/#Creating-more-specific-CommunityProfiles","page":"Welcome to the BiobakeryUtils tutorial","title":"Creating more specific CommunityProfiles","text":"","category":"section"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"When creating a CommunityProfile, data to be compiled can be selected by specifying taxonomic level.","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"Taxonomic levels may be given either as numbers or symbols:","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"1 = :kingdom\n2 = :phylum\n3 = :class\n4 = :order\n5 = :family\n6 = :genus\n7 = :species\n8 = :subspecies","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\", :genus)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 40 features in 1 samples\n\nFeature names:\nPrevotella, Roseburia, Faecalibacterium...Haemophilus, Lactococcus\n\nSample names:\nmetaphlan_single2","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> metaphlan_profile(\"test/files/metaphlan_single2.tsv\", 4)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 11 features in 1 samples\n\nFeature names:\nClostridiales, Bacteroidales, Coriobacteriales...Firmicutes_unclassified, Pasteurellales\n\nSample names:\nmetaphlan_single2","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"When creating a CommunityProfile from a merged table, data from unidentified taxa can be kept in by setting the keepunidentified flag to true. The default is to filter out unidentified data.","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"# EXAMPLES WITH KEEPUNIDENTIFIED = TRUE AND FALSE","category":"page"},{"location":"tutorial/#Indexing-CommunityProfiles","page":"Welcome to the BiobakeryUtils tutorial","title":"Indexing CommunityProfiles","text":"","category":"section"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"CommunityProfiles can be indexed using items in \"Feature names\" and \"Sample names\".","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> profile = metaphlan_profiles(\"test/files/metaphlan_multi_test.tsv\")\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 42 features in 7 samples\n\nFeature names:\nArchaea, Euryarchaeota, Methanobacteria...Actinomyces_viscosus, GCF_000175315\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\n\njulia> profile[:, \"sample1_taxonomic\"]\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 42 features in 1 samples\n\nFeature names:\nArchaea, Euryarchaeota, Methanobacteria...Actinomyces_viscosus, GCF_000175315\n\nSample names:\nsample1_taxonomic\n\n\n\njulia> profile[\"Archaea\", :]\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 1 features in 7 samples\n\nFeature names:\nArchaea\n\nSample names:\nsample1_taxonomic, sample2_taxonomic, sample3_taxonomic...sample6_taxonomic, sample7_taxonomic\n\n\n\njulia> profile[\"Actinomycetales\", \"sample3_taxonomic\"]\n0.08487\n\njulia> profile[\"Actinobacteria\", [\"sample1_taxonomic\", \"sample3_taxonomic\"]]\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 1 features in 2 samples\n\nFeature names:\nActinobacteria\n\nSample names:\nsample1_taxonomic, sample3_taxonomic\n\n\n\njulia> profile[[\"Actinobacteria\", \"Methanobacteria\"], \"sample1_taxonomic\"]\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 2 features in 1 samples\n\nFeature names:\nActinobacteria, Methanobacteria\n\nSample names:\nsample1_taxonomic","category":"page"},{"location":"tutorial/#Parsing-taxa","page":"Welcome to the BiobakeryUtils tutorial","title":"Parsing taxa","text":"","category":"section"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"A string representing taxonmic levels as formatted by MetaPhlAn can be separated by taxonomic levels into elements of type Taxon in a vector.","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> parsetaxa(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\"; throw_error = true)\n3-element Vector{Taxon}:\n Taxon(\"Archaea\", :kingdom)\n Taxon(\"Euryarchaeota\", :phylum)\n Taxon(\"Methanobacteria\", :class)","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"Specific taxonomic levels (given as either numbers or symbols) can be pulled out.","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\", 2)\nTaxon(\"Euryarchaeota\", :phylum)","category":"page"},{"location":"tutorial/","page":"Welcome to the BiobakeryUtils tutorial","title":"Welcome to the BiobakeryUtils tutorial","text":"julia> parsetaxon(\"k__Archaea|p__Euryarchaeota|c__Methanobacteria\", :kingdom)\nTaxon(\"Archaea\", :kingdom)","category":"page"}]
}
