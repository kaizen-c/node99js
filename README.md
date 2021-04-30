# node99js


[![Build Status](https://travis-ci.com/kaizen-c/node99js.svg?branch=main)](https://travis-ci.com/kaizen-c/node99js)

[![codecov](https://codecov.io/gh/kaizen-c/node99js/branch/main/graph/badge.svg?token=O1Q7P8MZA5)](https://codecov.io/gh/kaizen-c/node99js)


This NodeJS Project is integrated with Travis-CI, CodeCov, GitHub and Heroku.

1. [GitHub](https://github.com/): To push the code and trigger the Travis CI.
2. [Travis CI](https://travis-ci.com/): To run the tests and build the code for production.
3. [Heroku](https://www.heroku.com/): To deploy the code automatically once the tests/build is passed successfully.
4. [CodeCov](https://codecov.io/):To measure the test coverage of your codebase

## Prerequisites

Apart from having accounts created in above mentioned applications you will also have to make integrations between 

Travis-CI and Github and for that do check following [documentation](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci-using-github). 

next step is to use CodeCov with travis-Ci and a great tutorial could be found [here](https://dev.to/j0nimost/using-codecov-with-travis-ci-pytest-cov-1dfj).

Here i have used python to build up a simple web application using Flask. This will expose an endpoint where you will be able to get the consolidated results of two web URI's. 

> https://api.mentimeter.com/questions/48d75c359ce4
> https://api.mentimeter.com/questions/48d75c359ce4/result

Here you can see how all integrations work (except CodeCov).


![Alt text](Travis_Github_integration.JPG?raw=true "Title")

Image [Ref](https://blog.bitsrc.io/automate-your-deployment-on-heroku-eba486b95470)
