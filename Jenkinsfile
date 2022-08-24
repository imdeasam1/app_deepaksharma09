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
                echo 'master build'
                
                git branch: 'master', credentialsId: '3f764bc7-adfa-4011-b91f-759aa4c1678f', url: 'https://github.com/imdeasam1/app_deepaksharma09.git'
                sh '/home/dpk/.nvm/versions/node/v16.17.0/bin/npm install'
                //sh 'npm install'
                
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
                //sh 'npm run test'
            }
        }
        
        stage('Kubernetes Deployment'){
            steps{
                echo 'Kubernetes Deployment Started'
                //sh 'gcloud container clusters get-credentials nagp-cluster --zone asia-south1-c --project nagpdocker'
                //sh 'kubectl get nodes'
            }
        }
    }
}
