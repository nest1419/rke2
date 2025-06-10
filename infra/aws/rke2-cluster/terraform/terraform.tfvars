aws_region         = "us-east-1"
vpc_cidr           = "10.0.0.0/16"
public_subnet_cidr = "10.0.1.0/24"
key_name           = "ark"
ami_id             = "ami-0731becbf832f281e" # Ubuntu Server 24.04 LTS
instance_type      = "t3.medium"
ssh_ingress_cidr   = "0.0.0.0/0" # Reemplaza por tu IP si quieres limitar el acceso SSH
