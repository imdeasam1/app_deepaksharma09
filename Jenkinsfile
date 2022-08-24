pipeline {
    agent any

    environment {
        scannerHome = tool name: 'SonarQubeScanner'
    }
    
    tools {
      //nodejs 'nodejs'
      git 'Default'
      //dockerTool 'docker'
      //tool name: 'SonarQubeScanner'
    }

    stages {
        stage('Start SonarQube Analysis') {
            steps {
            echo 'Start SonarQube Analysis'
                withSonarQubeEnv('Test_Sonar') {
                sh '${scannerHome} -Dsonar.projectKey=sonar-deepaksharma09 -Dsonar.sources=. -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.login=c96fc560a6545e6126430a11d1c68b39dd19f735'
                }
            }
        }
        
        stage('Build') {
            steps {
                // Git Clone
                git branch: 'master', credentialsId: '3f764bc7-adfa-4011-b91f-759aa4c1678f', url: 'https://github.com/imdeasam1/app_deepaksharma09.git'
                sh 'gcloud container clusters get-credentials nagp-cluster --zone asia-south1-c --project nagpdocker'
                sh 'kubectl get nodes'
                //ssh in ubuntu vm
                //sshagent(['ubuntu-vm']){
                   // sh 'scp -v -o StrictHostKeyChecking=no deployment.yaml dpk@35.200.200.172:/home/dpk'
                   // echo 'loginnnnn succcesssss'
                //}
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
