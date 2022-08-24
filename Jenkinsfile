pipeline {
    agent any

    environment {
        scannerHome = tool name: 'SonarQubeScanner' // from global tools configuration
    }
    
    tools {
      nodejs 'nodejs'
      git 'Default'
      dockerTool 'docker'
    }

    stages {
        
        stage('Build') {
            steps {
                // Git Clone
                echo 'develop branch build'
                git branch: 'develop', credentialsId: 'GitHub', url: 'https://github.com/imdeasam1/app_deepaksharma09.git'
                sh 'npm install'
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                //script {
               //     if (env.BRANCH_NAME == 'main') {
                 //        echo 'Hello from main branch'
                   //  } else {
                     //   sh "echo 'Hello from ${env.BRANCH_NAME} branch!'"
                     //}
                //}             
                
                echo 'Start SonarQube Analysis'
                withSonarQubeEnv('Test_Sonar') { //Test_Sonar is SonarQube server
                 //sh '${scannerHome}/bin/sonar-scanner -X'
                 sh '/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarQubeScanner/bin/sonar-scanner \
                    -X -e -Dsonar.projectKey=sonar-deepaksharma09 -Dsonar.sources=. \
                    -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.login=c96fc560a6545e6126430a11d1c68b39dd19f735' \
                    -Dsonar.inclusions='**/tests/*.js,**/views/*.ejs,/routes/*.js,**/bin/www,**/app.js,**scripts/*'
                }
            }
        }

        stage('Kubernetes Deployment') {
            steps {
            echo 'Kubernetes Deployment started'
            //sh 'kubectl delete all --all -n kubernetes-cluster-deepaksharma09'
            echo 'Kubernetes Deployment Finished'
            }
        }
    }
}
