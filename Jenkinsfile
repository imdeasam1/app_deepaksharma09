pipeline {
    agent any

    environment {
        scannerHome = tool name: 'SonarQubeScanner' // from global tools configuration
    }
    
    tools {
      //nodejs 'nodejs'
      git 'Default'
      //dockerTool 'docker'
      //tool name: 'SonarQubeScanner'
    }

    stages {
        
        stage('Build') {
            steps {
                // Git Clone
                echo 'develop branch build'
                git branch: 'develop', credentialsId: '3f764bc7-adfa-4011-b91f-759aa4c1678f', url: 'https://github.com/imdeasam1/app_deepaksharma09.git'
                sh 'npm install'
            }
        }
        
        stage('Start SonarQube Analysis') {
            steps {
                echo 'Start SonarQube Analysis'
                //withSonarQubeEnv('Test_Sonar') { //Test_Sonar is SonarQube server
                 //sh '${scannerHome}/bin/sonar-scanner -X'
               // sh '${scannerHome} -e -Dsonar.projectKey=sonar-deepaksharma09 -Dsonar.sources=. -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.login=c96fc560a6545e6126430a11d1c68b39dd19f735'
               // }
            }
        }

        stage('Test Case Execution'){
            steps{
                echo 'Test Cases are running'
                //sh '/home/dpk/.nvm/versions/node/v16.17.0/bin/npm install'
                // sh 'npm run test'
            }
        }

        stage('Kubernetes Deployment') {
            steps {
            echo 'Kubernetes Deployment started'
                //sh 'gcloud container clusters get-credentials nagp-cluster --zone asia-south1-c --project nagpdocker'
               // sh 'kubectl get nodes'
            }
        }
    }
}
