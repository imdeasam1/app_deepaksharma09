pipeline {
    agent any

    //environment {
      //  scannerHome = tool name: 'SonarQubeScanner' // from global tools configuration
    //}
    
    tools {
      nodejs 'nodejs'
      git 'Default'
      dockerTool 'docker'
    }

    stages {
        
        stage('Build') {
            steps {
                // Git Clone
                echo 'master build'
                
                git branch: 'master', credentialsId: 'GitHub', url: 'https://github.com/imdeasam1/app_deepaksharma09.git'

                sh 'npm install'
            }
        }
        
        stage('Test Case Execution'){
            steps{
                echo 'Test Cases are running'
                sh 'npm run test'
            }
        }
        
        stage('Kubernetes Deployment'){
            steps{
                echo 'Kubernetes Deployment Started'
                sh 'gcloud container clusters get-credentials nagp-cluster --zone asia-south1-c --project nagpdocker'
                //sh 'kubectl get nodes'
                sh 'kubectl apply -f namespace.yaml'
                sh 'kubectl apply -f configmap.yaml,secrets.yaml'
                sh 'kubectl apply -f deployment.yaml,services.yaml'
                sh 'kubectl get deployment -n kubernetes-cluster-deepaksharma09'
                echo 'Kubernetes Deployment FINISHED'           
            }
        }
    }
}
