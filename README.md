# pba:lodash-deep
lodash-deep binding for meteor client/server
This package contains bindings for 

See [lodash-deep](https://github.com/paulbalomiri/lodash-deep) for 
the latest **modified** of lodash deep that is included in this meteor package.

## Contents
Originally this package is based on [marklagendijk's lodash-deep](https://github.com/marklagendijk/lodash-deep).

The package structure is as follows:
* [marklagendijk's lodash-deep](https://github.com/marklagendijk/lodash-deep) - *The Original*
* [my lodash-deep repository](https://github.com/paulbalomiri/lodash-deep) containing proposed modifications
  * If the PRs from this repository are accepted the repository the subtree contained in this package will be
    changed to point to marklagendijk's original lodash-deep
* [This repository](https://github.com/paulbalomiri/meteor-lodash-deep) containing
  * meteor wrapper files/package definitions
  * meteor specific extensions of *The Original*, which won't be proposed as PRs
  
##Versions
The meteor package versions start with 0.0.0 and are ignorant of the lodash version.
If/when there will be more followers and i feel that the package is stable enough, I will change the version to the current lodash version
