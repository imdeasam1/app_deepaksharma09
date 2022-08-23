pipeline {
    agent any

    //environment {
        //scannerHome = tool name: 'SonarQubeScanner'
    //}
    
    tools {
      //nodejs 'nodejs'
      git 'Default'
      //dockerTool 'docker'
      //tool name: 'SonarQubeScanner'
    }

    stages {
//        stage('Start SonarQube Analysis') {
  //          steps {
    //        echo 'Start SonarQube Analysis'
      //          withSonarQubeEnv('Test_Sonar') {
        //        sh '${scannerHome} -Dsonar.projectKey=sonar-deepaksharma09 -Dsonar.sources=. -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.login=c96fc560a6545e6126430a11d1c68b39dd19f735'
          //      }
            //}
        //}
        
        stage('Build') {
            steps {
                // Git Clone
                git branch: 'master', credentialsId: '3f764bc7-adfa-4011-b91f-759aa4c1678f', url: 'https://github.com/imdeasam1/app_deepaksharma09.git'
                //ssh in ubuntu vm
                sshagent(['ubuntu-vm']){
                    sh 'scp -o StrictHostKeyChecking=no node-deployment.yaml dpk@34.93.167.206:/var/lib/jenkins/workspace/master'
                    echo 'loginnnnn succcesssss'
                }
            }
        }
        
        stage('Test Case Execution'){
            steps{
                echo 'Test Cases are running'
                //sh '/home/dpk/.nvm/versions/node/v16.17.0/bin/npm install'
                //sh 'npm install'
            }
        }

        stage('Stop SonarQube Analysis') {
            steps {
            echo 'Stop SonarQube Analysis'
            }
        }
    }
}
